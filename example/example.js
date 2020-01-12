var dataMakerJson = require("../DataGenerator");

const schema = new dataMakerJson.Schema({
  Name: {
    type: dataMakerJson.Types.FirstName
  },
  LastName: {
    type: dataMakerJson.Types.LastName
  },
  Email: {
    type: dataMakerJson.Types.Email,
    provider: "mail.com"
  },
  Password: {
    type: dataMakerJson.Types.Password,
    default: "defaultPassword",
    toHash: true
  }
});

const user = schema.makeOne();
console.log(user);
