const generators = require("./generators");
const Types = require("./Types");
class Schema {
  constructor(dataTypes) {
    this.name = "";
    this.dataTypes = dataTypes;
  }

  makeOne() {
    var fakeModel = {};
    const keys = Object.keys(this.dataTypes);
    for (let i = 0; i < keys.length; i++) {
      fakeModel[keys[i]] = this.handleTypes(this.dataTypes[keys[i]]);
    }
    return fakeModel;
  }

  handleTypes(object) {
    switch (object.type) {
      case Types.FirstName:
        return (this.name = generators.generateName(object.type));

      case Types.LastName:
        return generators.generateName(object.type);

      case Types.Price:
        return generators.generatePrice(object.upperLimit);

      case Types.Email:
        return generators.generateEmail(this.name, object.provider);

      case Types.Password:
        return generators.generatePassword(object.default, object.toHash);

      default:
        throw new Error(`"${object.type}" type is not supported`);
    }
  }
}

module.exports = { Schema, Types };
