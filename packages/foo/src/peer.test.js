import { peer } from "./peer";

test("peer", () => {
  expect(peer(1)).toBeFalsy();
  expect(peer(2)).toBeTruthy();
});
