var fs = require("fs");
var config = require("./config");
var path = require('path');

const generateName = type => {
  var contents = fs.readFileSync(path.join(__dirname, 'data', `${type}.txt`), "utf8").split("\n");
  var target = Math.floor(Math.random() * contents.length);
  return contents[target].replace("\r", "");
};

const generatePrice = () => {
  return Math.abs(
    Math.floor(Math.random() * config.PRICE_UPPER_LIMIT) - Math.random()
  ).toFixed(config.NUMBER_OF_DIGITS);
};

const generateEmail = options => {
  return options.name
    ? `${options.name}${config.EMAIL_PROVIDER}`
    : `${generateName("firstName")}${config.EMAIL_PROVIDER}`;
};

const generateRandomPassword = () => {
  var password = "";
  for (let i = 0; i < config.PASSWORD_LENGTH; i++) {
    password +=
      config.CHARACTERS[Math.floor(Math.random() * config.CHARACTERS.length)];
  }
  return password;
};

const generatePassword = options => {
  return options.defaultPassword
    ? options.defaultPassword
    : generateRandomPassword();
};

module.exports = {
  generateName,
  generatePrice,
  generateEmail,
  generateRandomPassword,
  generatePassword
};
