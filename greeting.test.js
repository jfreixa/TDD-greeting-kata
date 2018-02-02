import greeting from "./greeting";

test("interpolates name in a simple greeting", () => {
  expect(greeting("Bob")).toBe("Hello, Bob.");
  expect(greeting("Allie")).toBe("Hello, Allie.");
});
test("Handle nulls by introducing a stand-in", () => {
  const name = null;
  expect(greeting(name)).toBe("Hello, my friend.");
});
test("Handle shouting.", () => {
  expect(greeting("JERRY")).toBe("HELLO JERRY!");
  expect(greeting("DAN")).toBe("HELLO DAN!");
});
test("Handle two names of input.", () => {
  const names = ["Jill", "Jane"];
  expect(greeting(names)).toBe("Hello, Jill and Jane.");
});

test("Handle arbitrarily names of input.", () => {
  const names = ["Amy", "Brian", "Charlotte"];
  expect(greeting(names)).toBe("Hello, Amy, Brian, and Charlotte.");
});
