import {
  setups,
  requests,
  initial,
  activeBus,
  mixLevels,
  requestMix,
} from "./routing.js";
import { Player } from "./audio.js";
import { equipmentDiagram } from "./diagram.js";
import { songs } from "./songs.js";
const state = initial(),
  player = new Player();
const $ = (id) => document.getElementById(id);
let playing = false,
  busy = false;
$("song-select").innerHTML = songs
  .map((song) => `<option value="${song.id}">${song.title}</option>`)
  .join("");
function songDetails() {
  const song = songs.find((song) => song.id === player.song);
  $("audio-status").textContent =
    `${song.style} · Recorded stems · 40-second practice remix`;
  $("song-source").href = song.source;
  $("song-license").href = song.licenseUrl;
  $("song-license").textContent = song.license;
}
$("song-select").addEventListener("change", () => {
  if (busy) return;
  player.select($("song-select").value);
  playing = false;
  $("audio-error").textContent = "";
  $("time").textContent = "0:00";
  $("progress").style.width = "0%";
  songDetails();
  updatePlay();
});
songDetails();
$("scenarios").innerHTML = setups
  .map(
    (s, i) =>
      `<button data-setup="${i}"><span class="nav-num">0${i + 1}</span><span><strong>${s.name}</strong><small>${s.sub}</small></span><span class="nav-arrow">↗</span></button>`,
  )
  .join("");
function render() {
  const s = setups[state.setup];
  document
    .querySelectorAll("[data-setup]")
    .forEach((b) =>
      b.setAttribute(
        "aria-current",
        Number(b.dataset.setup) === state.setup ? "step" : "false",
      ),
    );
  $("step").textContent = `SETUP 0${state.setup + 1} / 04`;
  $("title").textContent = s.name + ".";
  $("description").textContent = s.description;
  $("signal").innerHTML = equipmentDiagram(state.setup);
  for (const [id, value] of Object.entries({
    "route-note": s.note,
    "ear-description": s.ear,
    "ear-badge": s.badge,
    "lesson-title": s.lesson,
    "lesson-text": s.text,
    challenge: s.challenge,
  }))
    $(id).textContent = value;
  $("console-title").textContent = "Ask the sound engineer";
  $("console-description").textContent =
    "Choose a request—not a fader. The simulated engineer applies this preset at the board. Presets replace one another; they don’t stack.";
  $("requests").innerHTML = requests
    .filter((r) => state.setup !== 3 || r.id !== "voice")
    .map(
      (r) =>
        `<button data-request="${r.id}" aria-pressed="${state.selected[activeBus(state)] === r.id}"><strong>${r.id === "original" && state.setup === 3 ? "Original band feed" : r.label}</strong><span>${r.detail}</span><i aria-hidden="true">↗</i></button>`,
    )
    .join("");
  $("local-controls").hidden = state.setup !== 3;
  updateFeedback();
  update();
}
function updateFeedback() {
  const id = state.selected[activeBus(state)];
  const action =
    id === "original"
      ? "Starting balance restored."
      : id === "voice"
        ? "The engineer raised the vocal send."
        : "The engineer lowered the drum send.";
  const effect = [
    "Your ears and the shared stage monitor both receive this mix.",
    "Your ears do not change: the direct microphone feed bypasses the board. Only the stage monitor changes.",
    "Only your dedicated aux changes. The shared stage monitor stays the same.",
    "Only input 2—the band feed—changes. Your direct vocal and the shared stage monitor stay the same.",
  ][state.setup];
  $("console-footer").textContent = `${action} ${effect}`;
  document
    .querySelectorAll("[data-request]")
    .forEach((b) => b.setAttribute("aria-pressed", b.dataset.request === id));
}
function update() {
  player.update(mixLevels(state));
  for (const [i, name] of ["voice", "band"].entries()) {
    $("personal-" + name).value = state.personal[i];
    $("personal-" + name + "-value").textContent = state.personal[i] + "%";
  }
  $("mixer-destination").textContent =
    state.destination === "stage"
      ? "You’re listening to the stage monitor. These faders change only your in-ears—switch back to hear them."
      : "These controls change your in-ears only.";
  $("ear-value").textContent = state.ear + "%";
  $("ear").value = state.ear;
  document
    .querySelectorAll("[data-listen]")
    .forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.listen === state.destination),
    );
  $("ear").disabled = state.destination === "stage";
  $("ear").title =
    state.destination === "stage"
      ? "Switch to your in-ears to adjust their level"
      : "Overall in-ear level";
}
$("scenarios").addEventListener("click", (e) => {
  const button = e.target.closest("[data-setup]");
  if (button) {
    state.setup = Number(button.dataset.setup);
    render();
  }
});
$("requests").addEventListener("click", (e) => {
  const button = e.target.closest("[data-request]");
  if (!button) return;
  requestMix(state, button.dataset.request);
  updateFeedback();
  update();
});
document.querySelectorAll("[data-channel]").forEach((input) =>
  input.addEventListener("input", () => {
    state.personal[Number(input.dataset.channel)] = Number(input.value);
    update();
  }),
);
$("ear").addEventListener("input", (e) => {
  state.ear = Number(e.target.value);
  update();
});
document.querySelectorAll("[data-listen]").forEach((b) =>
  b.addEventListener("click", () => {
    state.destination = b.dataset.listen;
    update();
  }),
);
$("reset").addEventListener("click", () => {
  requestMix(state, "original");
  if (state.setup === 3) state.personal = [65, 75];
  state.ear = 50;
  render();
});
async function start() {
  busy = true;
  $("song-select").disabled = true;
  $("play").disabled = true;
  $("play").textContent = "…";
  $("play").setAttribute("aria-label", "Loading recorded song");
  $("audio-error").textContent = "";
  $("audio-status").textContent = "Loading recorded stems…";
  try {
    await player.play(mixLevels(state));
    update();
    playing = true;
    songDetails();
    $("audio-error").textContent = "";
  } catch {
    $("audio-error").textContent =
      "The song couldn’t load. Check your connection and press Play to retry.";
    $("audio-status").textContent = "Audio unavailable · Play to retry";
  } finally {
    busy = false;
    $("song-select").disabled = false;
    $("play").disabled = false;
    updatePlay();
  }
}
function updatePlay() {
  $("play").textContent = playing ? "Ⅱ" : "▶";
  $("play").setAttribute("aria-label", playing ? "Pause demo" : "Play demo");
  document.body.classList.toggle("playing", playing);
}
$("play").addEventListener("click", () => {
  if (busy) return;
  if (playing) {
    player.pause();
    playing = false;
    updatePlay();
  } else start();
});
setInterval(() => {
  const position = player.position;
  $("time").textContent =
    `0:${Math.floor(position).toString().padStart(2, "0")}`;
  $("progress").style.width =
    `${player.duration ? (position / player.duration) * 100 : 0}%`;
}, 100);
render();
