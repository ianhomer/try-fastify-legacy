import { peer } from "./peer";

test("peer", () => {
  expect(peer("x")).toBeFalsy();
  expect(peer(1)).toBeTruthy();
});
