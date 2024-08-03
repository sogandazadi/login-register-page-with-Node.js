// const sql = require("mysql2");
const dotenv = require("dotenv").config();

// const db = sql.createConnection(
//     {host: process.env.DATABASE_HOST ,
//     user: process.env.DATABASE_USER,
//     password : process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE
// })
// module.exports = db;


const { Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER , process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST ,
    dialect: 'mysql'
  });

// async function test_connection(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } 
//     catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
//   }

// test_connection();


module.exports = sequelize;




