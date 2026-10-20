export const setups = [
  {
    name: "Shared monitor",
    sub: "One mix. Everyone hears it.",
    description:
      "Your ears and the stage wedge share one board mix. Ask the engineer to change the balance; your pack only changes overall volume.",
    note: "The microphone sends your voice to the distant board. A shared line-level monitor feed returns to the wedge and wireless transmitter, then over radio to your bodypack.",
    ear: "Your pack turns the whole mix up or down. It cannot separate your voice from the band.",
    badge: "Volume control only",
    lesson: "Your request changes everyone’s shared mix.",
    text: "The engineer can give you more voice or less drums, but everyone on this monitor bus hears that change too. Turning up your pack instead would turn everything up together.",
    challenge:
      "Try “Less drums,” then compare your in-ears with the stage monitor. Both change.",
  },
  {
    name: "Mic only",
    sub: "Your voice, on its own.",
    description:
      "A microphone split feeds your ears directly, through a preamp and wireless system. Board monitor changes cannot alter this direct signal.",
    note: "One microphone branch runs to the board. The other passes through a suitable preamp to the IEM transmitter. The board independently feeds the powered wedge.",
    ear: "You can turn your direct voice up or down. There is no band signal in this feed to rebalance.",
    badge: "Only your voice is connected",
    lesson: "The board cannot change a feed that bypasses it.",
    text: "Ask for less drums: the engineer changes the stage monitor, but your direct vocal stays the same. This model excludes room sound and the sound of your own voice through your head.",
    challenge:
      "Request “More of my voice.” Compare the stage monitor with your ears—the request changes only the monitor.",
  },
  {
    name: "Dedicated aux",
    sub: "A mix made just for you.",
    description:
      "The engineer builds a separate aux mix for your ears. You can ask for changes without changing the shared stage monitor.",
    note: "Your microphone runs to the board. A dedicated pre-fader aux returns to your transmitter; a different monitor output returns to the wedge.",
    ear: "Your pack still receives one finished mix. Ask the engineer to change the balance; you control overall volume.",
    badge: "Your mix, engineer-controlled",
    lesson: "An independent mix is not independent control.",
    text: "Your aux has its own balance, but the earphones receive that balance already mixed together. “More of my voice in my aux” is a request to the engineer, not a knob on your bodypack.",
    challenge:
      "Request “Less drums” and compare with the stage monitor. Only your ears change.",
  },
  {
    name: "Me + band",
    sub: "Two inputs. Two controls.",
    description:
      "Your personal mixer receives your direct voice on input 1 and a board-made band mix on input 2. You can balance those two signals—not the instruments inside the band mix.",
    note: "A suitable mic split/preamp supplies input 1. A dedicated band-only aux (your voice excluded) supplies input 2. The mixer’s line output feeds the wireless system; wired headphones are another option.",
    ear: "Balance your direct voice against the whole band locally. To change drums versus guitar, ask the engineer to change the band feed.",
    badge: "Input 1: voice · Input 2: band",
    lesson: "Two inputs don’t become a whole mixing desk.",
    text: "“More me” is possible locally because your voice arrives separately. “Less drums” still needs the engineer. Some digital personal systems offer many channels, but only when those channels are actually routed to them.",
    challenge:
      "Raise your local “My voice” fader, then request “Less drums.” These are different controls in different places.",
  },
];

export const requests = [
  {
    id: "original",
    label: "Original mix",
    detail: "Return to the starting balance.",
    levels: [65, 55, 60, 65],
  },
  {
    id: "voice",
    label: "More of my voice",
    detail: "Ask the engineer to raise the vocal send.",
    levels: [195, 55, 60, 65],
  },
  {
    id: "drums",
    label: "Less drums",
    detail: "Ask the engineer to lower the drum send.",
    levels: [65, 55, 60, 5],
  },
];
export const initial = () => ({
  setup: 0,
  destination: "ears",
  ear: 50,
  shared: [65, 55, 60, 65],
  aux: [65, 55, 60, 65],
  band: [0, 55, 60, 65],
  personal: [65, 75],
  selected: { shared: "original", aux: "original", band: "original" },
});
export const activeBus = (state) =>
  state.setup === 2 ? "aux" : state.setup === 3 ? "band" : "shared";
export function requestMix(state, id) {
  const bus = activeBus(state);
  const request = requests.find((request) => request.id === id);
  state[bus] = request.levels.map((value, i) =>
    bus === "band" && i === 0 ? 0 : value,
  );
  state.selected[bus] = id;
}
export function mixLevels(state) {
  let values = state.shared;
  if (state.destination === "ears") {
    if (state.setup === 1) values = [100, 0, 0, 0];
    else if (state.setup === 2) values = state.aux;
    else if (state.setup === 3)
      values = [
        state.personal[0],
        ...state.band.slice(1).map((v) => (v * state.personal[1]) / 100),
      ];
  }
  return values.map(
    (v) => (v / 100) * (state.destination === "ears" ? state.ear / 100 : 1),
  );
}
