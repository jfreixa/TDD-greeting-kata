import greeting from "./greeting";

const testGreeting = (input, output) => {
  expect(greeting(input)).toBe(output);
};

test("interpolates name in a simple greeting", () => {
  testGreeting("Bob", "Hello, Bob.");
  testGreeting("Allie", "Hello, Allie.");
});
test("Handle nulls by introducing a stand-in", () => {
  testGreeting(null, "Hello, my friend.");
});
test("Handle shouting.", () => {
  testGreeting("JERRY", "HELLO JERRY!");
  testGreeting("DAN", "HELLO DAN!");
});
test("Handle two names of input.", () => {
  const names = ["Jill", "Jane"];
  testGreeting(names, "Hello, Jill and Jane.");
});

test("Handle shouting two names.", () => {
  const names = ["JANE", "TOMMY"];
  testGreeting(names, "HELLO JANE AND TOMMY!");
});

test("Handle arbitrarily names of input.", () => {
  const names = ["Amy", "Brian", "Charlotte"];
  testGreeting(names, "Hello, Amy, Brian, and Charlotte.");
});

test("Allow mixing of normal and shouted names by separating the response into two greetings.", () => {
  const names = ["Amy", "BRIAN", "Charlotte"];
  testGreeting(names, "Hello, Amy and Charlotte. AND HELLO BRIAN!");
});

test("If any entries in name are a string containing a comma, split it as its own input.", () => {
  const names = ["Bob", "Charlie, Dianne"];
  testGreeting(names, "Hello, Bob, Charlie, and Dianne.");
});
test("Allow the input to escape intentional commas introduced by Requirement 7", () => {
  const names = ["Bob", '"Charlie, Dianne"'];
  testGreeting(names, "Hello, Bob and Charlie, Dianne.");
});
