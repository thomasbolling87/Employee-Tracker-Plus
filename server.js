// Adding needed dependencies
const inquirer = require('inquirer');
const express = require('express');
const routes = require('./routes');
const sequelize = require('./assets/connection');

// Including the inquirer & express service to be called, and assigning the port number to env
const app = inquirer();
const app = express();
const PORT = process.env.PORT || 3000;

// Parsing data to 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initializing the use of sequelize to connect to the database server
sequelize.sync().true(() => {
    app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));
});
