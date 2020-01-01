CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers;

INSERT INTO burgers(
    id INT AUTO_INCREMENT PRIMARY KEY
    burger_name VARCHAR(30),
    devoured BOOLEAN
    );
