// Positions represent a physical stage, not a left-to-right signal-flow chart.
export function equipmentDiagram(setup) {
  const direct = setup === 1 || setup === 3;
  const personal = setup === 3;
  const shared = setup === 0;
  const device = (asset, x, y, width, height, name, detail) => `
    <g class="equipment">
      <image href="assets/${asset}.webp" x="${x}" y="${y}" width="${width}" height="${height}" />
      <text class="equipment-name" x="${x + width / 2}" y="${y + height + 23}">${name}</text>
      <text class="equipment-detail" x="${x + width / 2}" y="${y + height + 41}">${detail}</text>
    </g>`;
  const cable = (path, ear = false) =>
    `<path class="equipment-cable ${ear ? "ear-cable" : ""}" d="${path}" />`;
  const label = (x, y, text, ear = false) =>
    `<text class="cable-label ${ear ? "ear-label" : ""}" x="${x}" y="${y}">${text}</text>`;
  const description = [
    "The singer’s microphone, earphones, bodypack and wedge are together on stage. The mic cable runs away to the soundboard. One shared monitor feed returns to the wedge and transmitter, then wirelessly back to the singer’s bodypack.",
    "Microphone and earphones are together by the singer. A microphone splitter sends one branch away to the board and the other through a preamp directly to the transmitter. The board feeds only the wedge; wireless returns the direct voice to the bodypack.",
    "Microphone and earphones are together on stage. The mic cable runs to the distant board. A dedicated aux feeds the transmitter, while a separate monitor feed returns to the stage wedge. Radio carries the ear mix back to the singer.",
    "The singer has a two-input personal mixer. A direct microphone split and preamp feed input 1. A band-only aux returns from the distant board to input 2. The personal mixer sends its finished mix to the transmitter, then radio returns it to the singer’s bodypack. The stage wedge has its own board feed.",
  ][setup];
  return `<svg class="equipment-diagram" viewBox="0 0 1100 600" role="img" aria-labelledby="equipment-title equipment-description">
    <title id="equipment-title">${["Shared monitor", "Mic only", "Dedicated aux", "Me + band"][setup]}: stage and sound desk</title>
    <desc id="equipment-description">${description}</desc>
    <rect class="stage-ground" x="12" y="34" width="666" height="540" rx="18" />
    <path class="diagram-divider" d="M710 35 V570" />
    <text class="diagram-zone" x="32" y="20">ON STAGE · YOU AND YOUR GEAR</text>
    <text class="diagram-zone" x="770" y="20">SOUND DESK · THE ENGINEER</text>
    ${
      direct
        ? `${cable("M145 185 Q180 215 260 165")}${cable("M300 120 V76 Q300 58 320 58 H920 Q945 58 945 85 V130")}`
        : cable(
            "M145 185 Q182 220 182 180 V80 Q182 58 205 58 H920 Q945 58 945 85 V130",
          )
    }
    ${label(565, 48, "Your mic signal travels to the board →")}
    ${cable("M860 156 H560")}
    ${label(705, 143, shared ? "← Shared monitor mix" : "← Stage monitor mix")}
    ${
      shared
        ? `${cable("M765 156 V285 Q765 305 790 305 H850 V435", true)}<circle class="cable-junction" cx="765" cy="156" r="5"/>${label(871, 293, "Same mix · line-level split", true)}`
        : setup === 2
          ? `${cable("M980 180 H1030 V310 Q1030 330 1005 330 H900 V435", true)}${label(975, 301, "Your aux", true)}`
          : personal
            ? `${cable("M980 180 H1030 V265 Q1030 285 1010 285 H610 Q590 285 590 306 V378 H555", true)}${label(741, 273, "← Input 2: band-only aux", true)}
             ${cable("M335 180 H390 Q408 180 408 205 V370 Q408 395 485 395", true)}${label(433, 322, "Input 1: voice", true)}
             ${cable("M565 416 H750 Q780 416 820 435", true)}${label(696, 402, "Finished mix →", true)}`
            : `${cable("M335 180 H390 Q408 180 408 205 V283 Q408 305 430 305 H800 Q850 305 850 435", true)}${label(595, 292, "Direct voice · bypasses the board →", true)}`
    }
    ${cable("M278 416 Q210 455 143 421", true)}
    ${label(207, 397, "Earphone cable", true)}
    <path class="radio-link" d="M810 453 C650 566 455 566 315 445" />
    <g class="radio-waves"><path d="M680 510 Q660 529 680 548"/><path d="M667 500 Q639 529 667 558"/><path d="M654 490 Q618 529 654 568"/></g>
    ${label(493, 568, "← Wireless mix returns to your bodypack", true)}
    ${device("microphone", 48, 93, 105, 115, "Your microphone", "Beside your ears, on stage")}
    ${direct ? device("splitter-preamp", 240, 105, 112, 100, "Mic split + preamp", "Direct voice + board branch") : ""}
    ${device("monitor", 470, 100, 130, 110, "Stage wedge", shared ? "Same mix as your ears" : "Separate board mix")}
    ${device("soundboard", 830, 97, 175, 132, "Soundboard", "The engineer sets the sends")}
    ${device("earphones", 48, 354, 108, 108, "Your in-ears", "Worn by the singer")}
    ${device("receiver", 263, 333, 64, 130, "Your bodypack", "Worn by the same singer")}
    ${personal ? device("personal-mixer", 467, 355, 120, 90, "Two-input mixer", "1: voice · 2: band") : ""}
    ${device("transmitter", 807, 340, 155, 125, "IEM transmitter", "Radio sends the finished mix")}
  </svg>`;
}
