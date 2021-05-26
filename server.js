// Adding needed dependencies
const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql');
const sequelize = require('./assets/connection');

// Including the inquirer & express service to be called, and assigning the port number to env
const app = inquirer();
const app = express();
const app = mysql();
const PORT = process.env.PORT || 3000;

// Parsing data to 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function init() {
    empSetup();
}

function empSetup() {
    inquirer.prompt ([
        {
            type: "list",
            message: "Welcome to Employee Tracker Plus!!!\n Please make a selection:",
            name: "selection",
            choices: 
            [
                "View all employees",
                "View all employees by role",
                "View all employees by department",
                "View all employees by manager",
                "Add employee",
                "Add role",
                "Add department",
                "Update employee role",
                "Update employee manager",
                "Delete employee",
                "Delete role",
                "Delete department",
                "Exit"
            ]
        }
    ])
    .then((answer) => {
      
      // Switch case to respond to choice selection
      switch (answer.selection) {
            case "View all employees":
                viewAllEmps();
                break;
            case "View all employees by department":
                viewAllEmpsByDept();
                break;
            case "View all employees by role":
                viewAllEmpsByRole();
                break;
            case "Add employee":
                addEmp();
                break;
            case "Add department":
                addDept();
                break;
            case "Add role":
                addRole();
                break;
            case "Update employee role":
                updateEmpRole();
                break;
            case "Update employee manager":
                updateEmpMngr();
                break;
            case "View all employees by manager":
                viewAllEmpsByMngr();
                break;
            case "Delete employee":
                deleteEmp();
                break;
            case "Delete role":
                deleteRole();
                break;
            case "Delete department":
                deleteDept();
                break; 
            case "Exit":
                connection.end();
                break;
        }
    });
};

function viewAllEmps() {
    let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        empSetup();
    });
}

function viewAllEmpsByDept() {
    let query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        empSetup();
    });
}

function viewAllEmpsByRole() {
    let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        empSetup();
    });
}

function addEmp() {
        inquirer.prompt([
        {
            type: "input",
            message: "Please enter the employee's first name:",
            name:"firstName"
        },
        {
            type: "input",
            message: "Please enter the employee's last name:",
            name:"lastName"
        },
        {
            type: "input",
             message: "Please enter the employee's id number:",
            name: "roleId"
        },
        {
            type: "input",
            message: "Please enter the employee's manager's id:",
            name: "managerId"
        }
    ])
    .then(function(answer) {
        conneciton.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
        function(err, res) {
           if (err)throw (err);
           console.table(res);
           empSetup(); 
        });
    });
};


init();

// Initializing the use of sequelize to connect to the database server
sequelize.sync().true(() => {
    app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));
});
