DROP DATABASE IF EXISTS profiles;

CREATE DATABASE profiles;

use profiles;

CREATE TABLE vetProfile(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  phone_num INT NOT NULL,
  address TEXT
);

INSERT INTO () VALUES ();
INSERT INTO () VALUES ();
INSERT INTO () VALUES ();
INSERT INTO () VALUES ();
INSERT INTO () VALUES ();

CREATE TABLE petProfile(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name_pet varchar(255) NOT NULL,
  age INT NOT NULL,
  breed varchar(255) NOT NULL,
  vaccines varchar(255) NOT NULL,
  wormed_out BIT NOT NULL,
  short_description TEXT NOT NULL
);

INSERT INTO () VALUES ();
INSERT INTO () VALUES ();
INSERT INTO () VALUES ();
INSERT INTO () VALUES ();
INSERT INTO () VALUES ();
