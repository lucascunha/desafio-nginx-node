-- to create a new database
CREATE DATABASE nodedb;

-- to use database
use nodedb;

-- creating a new table
CREATE TABLE people (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(ID)
);

-- to show all tables
show tables;

-- to describe table
desc people;


