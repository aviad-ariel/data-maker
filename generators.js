var fs = require("fs");
var config = require("./config");
var path = require("path");
const Types = require("./Types");
const bcrypt = require("bcryptjs");

const generateName = type => {
  var contents = fs
    .readFileSync(path.join(__dirname, "data", `${type}.txt`), "utf8")
    .split("\n");
  var target = Math.floor(Math.random() * contents.length);
  return contents[target].replace("\r", "");
};

const generatePrice = upperLimit => {
  const limit = upperLimit ? upperLimit : config.PRICE_UPPER_LIMIT
  return Math.abs(
    Math.floor(Math.random() * limit) - Math.random()
  ).toFixed(config.NUMBER_OF_DIGITS);
};

const generateEmail = (name, provider) => {
  const emailProvider = provider ? provider : config.EMAIL_PROVIDER;
  return name
    ? `${name}@${emailProvider}`
    : `${generateName(Types.FirstName)}@${emailProvider}`;
};

const generateRandomPassword = () => {
  var password = "";
  for (let i = 0; i < config.PASSWORD_LENGTH; i++) {
    password +=
      config.CHARACTERS[Math.floor(Math.random() * config.CHARACTERS.length)];
  }
  return password;
};

const generatePassword = async (defaultPassword, toHash) => {
  const password = defaultPassword ? defaultPassword : generateRandomPassword();
  return toHash ? await hashPassword(password) : password;
};

const hashPassword = async password => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};
module.exports = {
  generateName,
  generatePrice,
  generateEmail,
  generateRandomPassword,
  generatePassword
};
