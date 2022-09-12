const sequelize = require('../config/db');
const {DataTypes} = require('sequelize');

const Page = sequelize.define("Page", {
                pk: {
                    type:DataTypes.INTEGER,
                    allowNull:false,
                    primaryKey:true,
                    autoIncrement:true,
                },
                index:{
                    type:DataTypes.INTEGER,
                    allowNull:false,
                },
                active_user : {
                    type:DataTypes.INTEGER,
                    allowNull:false,
                    default:0
                },
            }, {
                freezeTableName:true,
                timestamps:false
            }
        );

module.exports = Page;
