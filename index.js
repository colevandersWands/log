const inlineConsoleMethods = Object.entries(console).reduce(
  (all, next) => ({
    ...all,
    [next[0]]: (thing) => (console[next[0]](thing), thing),
  }),
  {},
);

export const log = Object.assign(
  inlineConsoleMethods.log,
  inlineConsoleMethods,
);
