var DataTypes = require("sequelize").DataTypes;
var _curriculum = require("./curriculum");
var _skill = require("./skill");
var _skill_item = require("./skill_item");
var _test = require("./test");

function initModels(sequelize) {
  var curriculum = _curriculum(sequelize, DataTypes);
  var skill = _skill(sequelize, DataTypes);
  var skill_item = _skill_item(sequelize, DataTypes);
  var test = _test(sequelize, DataTypes);

  // skill.removeAttribute('id');  


  return {
    curriculum,
    skill,
    skill_item,
    test,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
