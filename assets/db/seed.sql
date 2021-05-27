USE employee_tracker_db;

-- Values that will be placed into the database
INSERT INTO department(name)
VALUES
('Engineering'),
('Accounting'),
('Sales'),
('Human Resources'),
('IT'),
('Management'),
('Advertisment');

INSERT INTO roles(title, salary, departmentId)
VALUES
('Helpdesk Analyst I', 45000, 5),
('RIG Sales', 85000, 3),
('Accounts Payable', 65000, 2),
('Accounting Manager', 125000, 6),
('Talent Acquisition', 90000, 4),
('Digital Artist', 72000, 7),
('Chemicals Handler', 140000, 1),
('IT Manager', 115000, 6);


INSERT INTO employees(first_name, last_name, rolesId, departmentId, manager)
VALUES
('Thomas', 'Bolling', 6, 6, "Manager"),
('John', 'Smith', 3, 3, "John Smith"),
('Samantha', 'Bee', 4, 4, "Ann Price"),
('Michael', 'Jordan', 6, 6, "Manager"),
('Serena', 'Williams', 1, 1, "Michael Jackson"),
('Phil', 'Mickelson', 2, 2, "Luke Skywalker"),
('George', 'Washington', 5, 5, "Thomas Bolling"),
('Laura', 'London', 7, 7, "Liu Kang");