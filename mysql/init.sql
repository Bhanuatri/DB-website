CREATE DATABASE IF NOT EXISTS shopdb;
USE shopdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);

INSERT INTO users VALUES (1,'admin','admin123');

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price INT
);

INSERT INTO products (name, price)
VALUES ('Laptop',50000), ('Phone',20000);

CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product VARCHAR(100),
    amount INT,
    status VARCHAR(20)
);
