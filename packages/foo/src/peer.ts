/* eslint-disable @typescript-eslint/no-var-requires */
const isNumber = require("is-number");

export const peer = (x): boolean => isNumber(x);
