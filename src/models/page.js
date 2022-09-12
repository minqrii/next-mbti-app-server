const sequelize = require('../config/db');
const {DataTypes} = require('sequelize');

const Page = sequelize.define("Page", {
                id: {
                    type:DataTypes.INTEGER,
                    allowNull:false,
                    primaryKey:true,
                    autoIncrement:true,
                },
                activeUsers : {
                    type:DataTypes.INTEGER,
                    allowNull:false,
                },
            }, {
                freezeTableName:true,
                timestamps:false
            }
        );

module.exports = Page;
