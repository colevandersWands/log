const inlineConsole = Object.entries(console).reduce(
  (all, next) => ({
    ...all,
    [next[0]]: (thing) => (next[1](thing), thing),
  }),
  {},
);

export default Object.assign(inlineConsoleMethods.log, inlineConsoleMethods);
