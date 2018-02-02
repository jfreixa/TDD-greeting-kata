const isUppercase = text => text === text.toUpperCase();

const shoutSingleName = name => `HELLO ${name}!`;

const separateNamesInUppercaseAndLowercase = (separatedNames, name) => {
  isUppercase(name)
    ? separatedNames.uppercase.push(name)
    : separatedNames.lowercase.push(name);
  return separatedNames;
};

const splitNamesWithComaNotEscaped = (names, name) => {
  if (name[0] === '"' && name[name.length - 1]) {
    const escapedName = name.substr(1, name.length - 2);
    return [...names, escapedName];
  }
  return [...names, ...name.split(", ")];
};

export default (name = null) => {
  if (name === null) {
    name = "my friend";
  }
  if (!Array.isArray(name)) {
    if (isUppercase(name)) {
      return shoutSingleName(name);
    }
    return `Hello, ${name}.`;
  }

  let { uppercase, lowercase } = name
    .reduce(splitNamesWithComaNotEscaped, [])
    .reduce(separateNamesInUppercaseAndLowercase, {
      uppercase: [],
      lowercase: []
    });

  const lastName = lowercase.pop();
  if (lowercase.length !== 1) {
    lowercase = lowercase.join(", ") + ",";
  }
  const lowercaseText = `Hello, ${lowercase} and ${lastName}.`;

  let uppercaseText;
  if (uppercase.length === 1) {
    uppercaseText = `AND ${shoutSingleName(uppercase[0])}`;
  }
  return uppercaseText !== undefined
    ? `${lowercaseText} ${uppercaseText}`
    : lowercaseText;
};
