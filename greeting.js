const isUppercase = text => text === text.toUpperCase();

const shoutSingleName = name => `HELLO ${name}!`;
const saySingleName = name => `Hello, ${name}.`;

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

const handleLowercaseText = names => {
  if (names.length === 0) {
    return "";
  }
  if (names.length === 1) {
    return saySingleName(names[0]);
  }
  const lastName = names.pop();
  let namesText = names.length > 1 ? names.join(", ") + "," : names[0];

  return `Hello, ${namesText} and ${lastName}.`;
};

const handleUppercaseText = names => {
  if (names.length === 0) {
    return "";
  }
  if (names.length === 1) {
    return shoutSingleName(names[0]);
  }
  const lastName = names.pop();
  let namesText = names.join(", ");

  return `HELLO ${namesText} AND ${lastName}!`;
};

export default (name = null) => {
  if (name === null) {
    return saySingleName("my friend");
  }
  let names = Array.isArray(name) ? name : [name];

  let { uppercase, lowercase } = names
    .reduce(splitNamesWithComaNotEscaped, [])
    .reduce(separateNamesInUppercaseAndLowercase, {
      uppercase: [],
      lowercase: []
    });

  let lowercaseText = handleLowercaseText(lowercase);
  let uppercaseText = handleUppercaseText(uppercase);

  if (uppercaseText === "") {
    return lowercaseText;
  }
  if (lowercaseText === "") {
    return uppercaseText;
  }

  return `${lowercaseText} AND ${uppercaseText}`;
};
