DROP DATABASE RUNTIME_TERROR;
CREATE DATABASE RUNTIME_TERROR;
USE RUNTIME_TERROR;

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    gender VARCHAR(255),
    lastLogin DATE,
    password VARCHAR(255),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);



CREATE TABLE carts (
    id INT AUTO_INCREMENT NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE address (
    id INT AUTO_INCREMENT NOT NULL,
    street VARCHAR(255),
    city VARCHAR(255),
    notes VARCHAR(255),
    buldingNumber VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE restaurants (
    id INT AUTO_INCREMENT NOT NULL,
    location VARCHAR(255) NOT NULL,
    backImg VARCHAR(255) NOT NULL,
    Logo VARCHAR(255) NOT NULL,
    orders INT DEFAULT 0,
    lat VARCHAR(255) NOT NULL,
    lng VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    rest_category VARCHAR(255) NOT NULL,
    owner_id INT,
    FOREIGN KEY (owner_id) REFERENCES users(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE employees(
    id INT AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,
    restarent_id INT NOT NULL,
    salary INT NOT NULL,
    weeklyHoures INT NOT NULL,
    shift VARCHAR(255) NOT NULL,
    FOREIGN KEY (restarent_id) REFERENCES restaurants(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);
-- CREATE TABLE restaurants_employee (
--     id INT AUTO_INCREMENT NOT NULL,
--     employee_id INT,
--     restarent_id INT,
--     FOREIGN KEY (restarent_id) REFERENCES restaurants(id),
--     FOREIGN KEY (employee_id) REFERENCES users(id),
--     PRIMARY KEY (id)
-- );
CREATE TABLE meals(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    imgUrl VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    restarent_id INT,
    is_deleted TINYINT DEFAULT 0,
    FOREIGN KEY (restarent_id) REFERENCES restaurants(id),
    PRIMARY KEY (id)
);

CREATE TABLE sizes (
    id INT AUTO_INCREMENT NOT NULL,
    size VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    price INT NOT NULL,
    FOREIGN KEY (name) REFERENCES meals(name),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE cartItems(
    id INT AUTO_INCREMENT NOT NULL,
    quantity VARCHAR(255) NOT NULL,
    subTotal FLOAT NOT NULL,
    cart_id INT,
    meal_id INT,
    FOREIGN KEY (meal_id) REFERENCES meals(id),
    FOREIGN KEY (cart_id) REFERENCES carts(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT NOT NULL,
    quantity VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    receipt FLOAT NOT NULL,
    location VARCHAR(255) NOT NULL,
    user_id INT,
    meal_id INT,
    FOREIGN KEY (meal_id) REFERENCES meals(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE permissions (
    id INT AUTO_INCREMENT NOT NULL,
    permission VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role_permission (
    id INT NOT NULL AUTO_INCREMENT NOT NULL,
    role_id INT,
    permission_id INT,
    FOREIGN KEY (role_id) REFERENCES roles (id),
    FOREIGN KEY (permission_id) REFERENCES permissions (id),
    PRIMARY KEY (id)
);

CREATE TABLE requests(
    id INT NOT NULL AUTO_INCREMENT NOT NULL,
    restaurantName VARCHAR(255) NOT NULL,
    state VARCHAR(255),
    owner_Id INT,
    FOREIGN KEY (owner_Id) REFERENCES users (id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);