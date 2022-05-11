const inlineConsoleMethods = Object.entries(console).reduce(
  (all, next) => ({
    ...all,
    [next[0]]: (thing) => (console[next[0]](thing), thing),
  }),
  {},
);

export default Object.assign(inlineConsoleMethods.log, inlineConsoleMethods);
