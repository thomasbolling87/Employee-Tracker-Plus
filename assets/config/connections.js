// Adding the needed dependencies. Using sequelize and dotenv to connect to the mySQL database
const Sequelize = requre('sequelize');
require('dotenv').config();

let sequelize;

// Creating the sequelize object that will contain the database information that is pulled from .env
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3000
    }
);

module.exports = sequelize;