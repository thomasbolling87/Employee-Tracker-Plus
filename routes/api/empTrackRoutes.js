// Added needed dependencies
const router = require('express').Router();
const Employee = require('../../tables/employee');
const Department = require('../../tables/department');
const Role = require('../../tables/role');

// This get route pull all inputted data from the main folder for the Employee class
router.get('/', (req, res) => {
    Employee.findAll().then((employeeData) => {
        res.json(employeeData);
    });
});

// This put will update the employee based employee_id
router.put('/:employee_id', (req, res) => {
    Employee.update(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            role_id: req.params.role_id,
            manager_id: req.params.manager_id
        },
        {
            where: 
            {
                employee_id: req.params.employee_id,
            }
        }
    )
});

// This get route pull all inputted data from the main folder for the Department class
router.get('/', (req, res) =>{
    Department.findAll().then((departmentData) => {
        res.json(departmentData);
    });
});

// This get route pull all inputted data from the main folder for the Role class
router.get('/', (req, res) => {
    Role.findAll().then((roleData) => {
        res.json(roleData);
    });
});