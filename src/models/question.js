
const sequelize = require('../config/db');
const {DataTypes} = require('sequelize');

const Question = sequelize.define("Question", {
    id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    category : {
        type:DataTypes.TINYINT,
        allowNull:false,
    },
    total_submit: {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    first:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    second:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
        }, {
    freezeTableName:true,
    timestamps:false
    }
);

module.exports = Question;
