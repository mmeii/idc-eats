-- Drops the db if it exists currently --
DROP DATABASE IF EXISTS idc_db;
-- Creates the database --
CREATE DATABASE idc_db;

-- Use idc_db;

-- CREATE TABLE users (
--     id INTEGER NOT NULL AUTO_INCREMENT,
--     username VARCHAR NOT NULL,
--     password VARCHAR,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE types (
--     id INTEGER NOT NULL AUTO_INCREMENT,
--     type VARCHAR NOT NULL
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE categories (
--     id INTEGER NOT NULL AUTO_INCREMENT,
--     option VARCHAR NOT NULL,
--     type_id INTEGER NOT NULL
--     display BOOLEAN,
--     PRIMARY KEY (id),
--     FOREIGN KEY (type_id) REFERENCES type(id)
-- );

-- CREATE TABLE preferences (
--     id INTEGER NOT NULL AUTO_INCREMENT,
--     user_id INTEGER NOT NULL,
--     option_id INTEGER NOT NULL,
--     active BOOLEAN
--     PRIMARY KEY (id),
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (option_id) REFERENCES options(id)
-- );

-- CREATE TABLE restaurants (
--     id INTEGER NOT NULL AUTO_INCREMENT,
--     yelp_id INTEGER NOT NULL,
--     name VARCHAR NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE user_selections (
--     id INTEGER NOT NULL AUTO_INCREMENT
--     user_id INTEGER NOT NULL,
--     restaurant_id INTEGER NOT NULL,
--     committed BOOLEAN,
--     PRIMARY KEY (id),
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
-- );

-- CREATE TABLE restaurant_options (
--     id INTEGER NOT NULL AUTO_INCREMENT,
--     restaurant_id INTEGER NOT NULL,
--     option_id INTEGER NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
--     FOREIGN KEY (option_id) REFERENCES options(id)
-- );

-- CREATE TABLE weight (
--     id INTEGER NOT NULL AUTO_INCREMENT,
--     user_id INTEGER NOT NULL,
--     option_id INTEGER NOT NULL,
--     value INTEGER NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (option_id) REFERENCES options(id)
-- );