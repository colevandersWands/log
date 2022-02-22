const inlineConsole = Object.entries(console).reduce(
  (all, next) => ({
    ...all,
    [next[0]]: (thing) => (next[1](thing), thing),
  }),
  {},
);

export const log = Object.assign(
  inlineConsole.log,
  inlineConsole,
);
