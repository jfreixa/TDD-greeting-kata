export default (name = null) => {
  if (name === null) {
    return "Hello, my friend.";
  }
  let names = Array.isArray(name) ? name : [name];
  if (names[0] === names[0].toUpperCase()) {
    return `HELLO ${names[0].toUpperCase()}!`;
  }
  if (names.length === 1) {
    return `Hello, ${names[0]}.`;
  }
  return `Hello, ${names[0]} and ${names[1]}.`;
};
