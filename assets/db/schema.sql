-- Base creation of the Employee Tracker database
DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

-- Creation of all the tables
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INT,
    departmentId INT NOT NULL,
    FOREIGN KEY (departmentId) REFERENCES department(id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager VARCHAR(30) NOT NULL,
    manager_id INT,
    departmentId INT NOT NULL,
    rolesId INT NOT NULL,
    FOREIGN KEY(rolesId) REFERENCES roles(id),
    FOREIGN KEY(manager_id) REFERENCES employees(id),
    FOREIGN KEY(departmentId) REFERENCES department(id)
);
