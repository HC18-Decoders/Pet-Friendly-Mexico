DROP DATABASE IF EXISTS profiles;

CREATE DATABASE profiles;

use profiles;


CREATE TABLE vetProfiles(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  phone_number char(20) NOT NULL,
  address TEXT
);

INSERT INTO vetProfiles (first_name, last_name, phone_number, address) VALUES ('Marcella', 'Torres', '5540208533', '123 Test St., Testing, TS, 12345');
INSERT INTO vetProfiles (first_name, last_name, phone_number, address) VALUES ('Alenjandro', 'Rodriguez', '5523164288', '456 Tested Ave., Tester, TS,67890');
INSERT INTO vetProfiles (first_name, last_name, phone_number, address) VALUES ('Jacqueline', 'Romero', '5534668497', '789 W. Test Rd., Approved, TS, 54721');
INSERT INTO vetProfiles (first_name, last_name, phone_number, address) VALUES ('Jesse', 'Nava', '5521224558', '109 E. Testing Way, Testing, TS, 87534');
INSERT INTO vetProfiles (first_name, last_name, phone_number, address) VALUES ('Jack', 'Cervantes', '5519814312', '22 Tester Rd., Tests, TS, 38943');

CREATE TABLE petProfiles(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  pet_name varchar(255) NOT NULL,
  age INT NOT NULL,
  breed varchar(255) NOT NULL,
  vaccines varchar(255) NOT NULL,
  dewormed varchar(20) NOT NULL,
  small_description TEXT NOT NULL
);

INSERT INTO petProfiles (pet_name, age, breed, vaccines, dewormed, small_description) VALUES ('Camilo', 2, 'Pomeranian', 'Rabies, Parvovirus, and Lyme Disease', 'yes', 'Agressive, Furry, Anti-social');
INSERT INTO petProfiles (pet_name, age, breed, vaccines, dewormed, small_description) VALUES ('Jaws', 3, 'Pitbull', 'Rabies, Parvovirus, Bordetella, Leptospirosis, and Distemper', 'yes', 'Playful, Well behaved, Freindly');
INSERT INTO petProfiles (pet_name, age, breed, vaccines, dewormed, small_description) VALUES ('Giggles', 1, 'French Poddle', 'Rabies, Parvovirus, Leptospirosis, and Lyme Disease', 'yes', 'Non-agressive, Well behaved, Freindly with kids');
INSERT INTO petProfiles (pet_name, age, breed, vaccines, dewormed, small_description) VALUES ('Balu', 3, 'Schnouzer', 'Rabies, Parvovirus, Lyme Disease, Leptospirosis, and Distemper', 'yes', 'Agressive, Hyperactive, not friendly with kids');
INSERT INTO petProfiles (pet_name, age, breed, vaccines, dewormed, small_description) VALUES ('Spike', 4, 'Doberman', 'Rabies, Lyme Disease, Distemper', 'no', 'Well behaved, Protective, Playful with kids');

CREATE TABLE servicesProfiles(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name varchar(255) NOT NULL,
  last_name varchar (255) NOT NULL,
  phone_number varchar(20) NOT NULL,
  address TEXT NOT NULL,
  business_name varchar(255) NOT NULL,
  business_type varchar(255) NOT NULL
);

INSERT INTO servicesProfiles (first_name, last_name, phone_number, address, business_name, business_type) VALUES ('Norma', 'Martinez', '5540204972', '123 Test St., Testing, TS, 12345', 'Fly Pet', 'Pet Groomer');
INSERT INTO servicesProfiles (first_name, last_name, phone_number, address, business_name, business_type) VALUES ('Liz', 'Tapia', '5523169836', '456 Tested Ave., Tester, TS,67890', 'Pet Nanny 911', 'Pet Sitter');
INSERT INTO servicesProfiles (first_name, last_name, phone_number, address, business_name, business_type) VALUES ('Javier', 'Arciniega', '5534668048', '789 W. Test Rd., Approved, TS, 54721', 'Healthy Pet', 'Veterinary');
INSERT INTO servicesProfiles (first_name, last_name, phone_number, address, business_name, business_type) VALUES ('Daniel', 'Trejo', '5521221235', '109 E. Testing Way, Testing, TS, 87534', 'Distresser', 'Dog Walker');
INSERT INTO servicesProfiles (first_name, last_name, phone_number, address, business_name, business_type) VALUES ('Ricardo', 'Meza', '5519819487', '22 Tester Rd., Tests, TS, 38943', 'Pet Doctor', 'Veterinary');
