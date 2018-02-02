import greeting from "./greeting";

test("interpolates name in a simple greeting", () => {
  const name = "Bob";
  expect(greeting(name)).toBe("Hello, Bob.");
});
test("Handle nulls by introducing a stand-in", () => {
  const name = null;
  expect(greeting(name)).toBe("Hello, my friend.");
});
