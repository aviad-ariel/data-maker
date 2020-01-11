# data-maker
Genarte fake data.

#### Inatall via NPM:
    npm i data-maker-json
    
#### Usage:
###### Require Make:  
    var Make = require("./Make");

###### Constract schema:
    const make = new Make.Schema({
        your-field-name: {
          type: Make.Types.some-type,
          optional-setting: value,
        }
      });
###### Generate json object according to "make" schema:
    make.makeOne();
#### Example:
<p align="center">
  <img src="https://gfycat.com/warmheartedrewardingbabirusa" width="70%">
</p>


| Type  | optinal-setting |
| ------------- | ------------- |
| Make.Types.FirstName  | None  |
| Make.Types.LastName  | None  |
| Make.Types.Email  | String: provider(Email provider default is gmail)  |
| Make.Types.Password  | String: default(Default password, if not given a random 10 digit password will generated)  Boolean: toHash(If set to true uses bcrypt to hash the password)  |
| Make.Types.Price  | Int: upperLimit(The random price upper limit, 100 is the default)  |
