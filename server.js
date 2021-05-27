// Adding needed dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');

// connectToDb to the sql database
const connectToDb = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Password',
    database: 'employee_tracker_db',
});

connectToDb.connect((err) => {
    if(err) throw(err);
    empSetup();
});

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
            case "Exit":
                connectToDb.end();
                break;
        }
    });
};

function viewAllEmps() {
    let query = "SELECT * FROM employees";
    connectToDb.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        empSetup();
    });
}

function viewAllEmpsByDept() {
    let query = "SELECT * FROM department";
    connectToDb.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        empSetup();
    });
}

function viewAllEmpsByRole() {
    let query = "SELECT * FROM roles";
    connectToDb.query(query, function(err, res) {
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
            message: "Please enter the employee's manager's name:",
            name: "managerName"
        },
        {
            type: "number",
            message: "Please enter the manager ID number:",
            name: "manager_id"
        }
    ])
    .then(function(answer) {
        connectToDb.query("INSERT INTO employees (first_name, last_name, role_id, manager, manager_id) VALUES (?,?,?,?)", [answer.firstName, answer.lastName, answer.roleId, answer.managerName, answer.managerId],
        function(err, res) {
           if (err)throw (err);
           console.table(res);
           empSetup(); 
        });
    });
};

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please add the employee's role:",
            name: "roleName"
        },
        {
            type: "input",
            message: "Please enter the salary for this position:",
            name: "salary"
        },
        {
            type: "list",
            message: "Please select the department number:",
            name: "roleId",
            choices:
            [
                "1 Engineering", "2 Accounting", "3 Sales", "4 Human Resources", "5 IT", "6 Management", "7 Advertisement"
            ]
        }
    ])
    .then(function(answer) {
        connectToDb.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salary, answer.roleId],
        function (res, req) {
            if (err)throw (err);
            console.table(res);
            empSetup();     
        });
    });
};

function addDept() {
    inquirer.prompt({
        type: "input",
        message: "Please add the name of the new department:",
        name: "deptName"
    })
    .then(function(answer) {
        connectToDb.query("INSERT INTO department (name) VALUES (?)", [answer.deptName],
        function (res, req) {
            if(err) throw(err);
            console.table(res);
            empSetup();
        });
    });
};

function updateEmpRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please select an employee to update:",
            name: "empUpdate"
        },
        {
            type: "input",
            message: "What is the employee's new position:",
            name: "empNewRole"
        }
    ])
    .then(function(answer) {
        connectToDb.query("UPDATE employees SET role_id=? WHERE first_name=?", [ answer.empNewRole, answer.empUpdate],
        function (res, req) {
            if(err) throw(err);
            console.table(res);
            empSetup();
        });
    });
};

function updateEmpMngr() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please select an employee to update:",
            name: "empUpdate"
        },
        {
            type: "input",
            message: "Who is the employee's new manager:",
            name: "empNewMang"
        }
    ])
    .then(function(answer) {
        connectToDb.query("UPDATE employees SET manager=? WHERE first_name=?", [answer.empNewMang, answer.empUpdate],
        function (res, req) {
            if(err) throw(err);
            console.table(res);
            empSetup();
        });
    });
};
