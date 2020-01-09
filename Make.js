const generators = require("./generators");

class Make {
  constructor(dataTypes, options) {
    this.dataTypes = dataTypes;
    this.options = options;
  }

  generateOne() {
    var fakeModel = {};
    Object.keys(this.dataTypes).forEach(element => {
      fakeModel[element] = this.handleTypes(this.dataTypes[element]);
    });
    return fakeModel;
  }

  handleTypes(type) {
    switch (type) {
      case "firstName":
        this.options.name = generators.generateName("firstName");
        return this.options.name;

      case "lastName":
        return generators.generateName("lastName");

      case "price":
        return generators.generatePrice();

      case "email":
        return generators.generateEmail(this.options);

      case "password":
        return generators.generatePassword(this.options);

      default:
        throw new Error(`"${type}" type is not supported`);
    }
  }
}

module.exports = Make;
