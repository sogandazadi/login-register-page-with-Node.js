const sequelize = require("../routes/db_config");
const {DataTypes} = require("sequelize");


const User = sequelize.define(
   "users",
   {
    Id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING(100),
        allowNull: false
    },
    password:{
        type:DataTypes.TEXT,
        allowNull: false
    }
   },
)

module.exports = User;
