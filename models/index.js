'use strict';

const Sequelize = require('sequelize');
const initModels = require('./init-models'); //추가 1
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

let models = initModels(sequelize) //추가 2 (init-models의 function 한 것)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.curriculum = models.curriculum; // 추가 3
db.skill_item = models.skill_item; // 추가 4
db.skill = models.skill;  // 추가 5

module.exports = db;