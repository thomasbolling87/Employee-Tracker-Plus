-- Values that will be placed into the database
INSERT INTO departments(department_name)
VALUES
('Engineering'),
('Accounting'),
('Sales'),
('Human Resources'),
('IT'),
('Management'),
('Advertisment');

INSERT INTO roles(title, salary, department_id)
VALUES
('Helpdesk Analyst I', 45000, 5),
('RIG Sales', 85000, 3),
('Accounts Payable', 65000, 2),
('Accounting Manager', 125000, 6),
('Talent Acquisition', 90000, 4),
('Digital Artist', 72000, 7),
('Chemicals Handler', 140000, 1),
('IT Manager', 115000, 6);


INSERT INTO employees(first_name, last_name, role_id)
('Thomas', 'Bolling', 6),
('John', 'Smith', 3),
('Samantha', 'Bee', 4),
('Michael', 'Jordan', 6),
('Serena', 'Williams', 1),
('Phil', 'Mickelson', 2),
('George', 'Washington', 5),
('Laura', 'London', 7);