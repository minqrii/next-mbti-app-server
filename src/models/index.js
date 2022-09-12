const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Page = require('./page');
db.Question = require('./question');
db.Mbti = require('./mbti');

module.exports = db;

