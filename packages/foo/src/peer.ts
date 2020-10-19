/* eslint-disable @typescript-eslint/no-var-requires */
const isEven = require("is-even");

// isNumber is a peer dependency and the dependent needs to explicitly
// add as a dependency.
export const peer = (x): boolean => isEven(x);
