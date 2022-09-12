const sequelize = require('../config/db');
const {DataTypes} = require('sequelize');

const Mbti = sequelize.define("Mbti", {
                pk: {
                    type:DataTypes.INTEGER,
                    allowNull:false,
                    primaryKey:true,
                    autoIncrement:true,
                },
                category : {
                    type:DataTypes.TINYINT,
                    allowNull:false,
                },
                result:{
                    type:DataTypes.INTEGER,
                    allowNull:false,
                }
            }, {
                freezeTableName:true,
                timestamps:false
            }
        );

module.exports = Mbti;
