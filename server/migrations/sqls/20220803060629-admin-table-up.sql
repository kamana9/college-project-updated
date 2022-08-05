/* Replace with your SQL commands */
CREATE TABLE admin(
  id SERIAL PRIMARY KEY NOT NULL,
  phone VARCHAR(20) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  DOB DATE NOT NULL,
  gender varchar(15) NOT NULL
);