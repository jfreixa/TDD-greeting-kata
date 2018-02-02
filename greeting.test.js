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

test("Allow mixing of normal and shouted names by separating the response into two greetings.", () => {
  const names = ["Amy", "BRIAN", "Charlotte"];
  expect(greeting(names)).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});

test("If any entries in name are a string containing a comma, split it as its own input.", () => {
  const names = ["Bob", "Charlie, Dianne"];
  expect(greeting(names)).toBe("Hello, Bob, Charlie, and Dianne.");
});
test("Allow the input to escape intentional commas introduced by Requirement 7", () => {
  const names = ["Bob", '"Charlie, Dianne"'];
  expect(greeting(names)).toBe("Hello, Bob and Charlie, Dianne.");
});
