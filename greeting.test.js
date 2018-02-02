import greeting from "./greeting";

test("interpolates name in a simple greeting", () => {
  const name = "Bob";
  expect(greeting(name)).toBe("Hello, Bob.");
});
