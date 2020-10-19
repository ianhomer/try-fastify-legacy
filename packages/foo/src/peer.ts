/* eslint-disable @typescript-eslint/no-var-requires */
const isEven = require("is-even");

// isEven is a peer dependency and the dependent needs to be explicitly
// added as a dependency.
export const peer = (x): boolean => isEven(x);
