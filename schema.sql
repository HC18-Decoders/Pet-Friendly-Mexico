DROP DATABASE IF EXISTS profiles;

CREATE DATABASE profiles;

use profiles;

CREATE TABLE petProfiles(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  petName varchar(255) NOT NULL,
  age INT NOT NULL,
  breed varchar(255) NOT NULL,
  vaccines varchar(255) NOT NULL,
  dewormed varchar(20) NOT NULL,
  smallDescription TEXT NOT NULL
);

INSERT INTO petProfiles (petName, age, breed, vaccines, dewormed, smallDescription) VALUES ('Camilo', 2, 'Pomeranian', 'Rabies, Parvovirus, and Lyme Disease', 'yes', 'Agressive, Furry, Anti-social');
INSERT INTO petProfiles (petName, age, breed, vaccines, dewormed, smallDescription) VALUES ('Jaws', 3, 'Pitbull', 'Rabies, Parvovirus, Bordetella, Leptospirosis, and Distemper', 'yes', 'Playful, Well behaved, Freindly');
INSERT INTO petProfiles (petName, age, breed, vaccines, dewormed, smallDescription) VALUES ('Giggles', 1, 'French Poddle', 'Rabies, Parvovirus, Leptospirosis, and Lyme Disease', 'yes', 'Non-agressive, Well behaved, Freindly with kids');
INSERT INTO petProfiles (petName, age, breed, vaccines, dewormed, smallDescription) VALUES ('Balu', 3, 'Schnouzer', 'Rabies, Parvovirus, Lyme Disease, Leptospirosis, and Distemper', 'yes', 'Agressive, Hyperactive, not friendly with kids');
INSERT INTO petProfiles (petName, age, breed, vaccines, dewormed, smallDescription) VALUES ('Spike', 4, 'Doberman', 'Rabies, Lyme Disease, Distemper', 'no', 'Well behaved, Protective, Playful with kids');

CREATE TABLE servicesProfiles(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstName varchar(255) NOT NULL,
  lastName varchar (255) NOT NULL,
  phoneNumber char(20) NOT NULL,
  streetAddress TEXT,
  city varchar (255),
  state varchar(255),
  zipCode char (50),
  businessName varchar(255) NOT NULL,
  businessType varchar(255) NOT NULL
);

INSERT INTO servicesProfiles (firstName, lastName, phoneNumber, streetAddress, city, state, zipCode, businessName, businessType) VALUES ('Norma', 'Martinez', '5540204972', '123 Test St.', 'Testing', 'TS', '12345', 'Fly Pet', 'Pet Groomer');
INSERT INTO servicesProfiles (firstName, lastName, phoneNumber, streetAddress, city, state, zipCode, businessName, businessType) VALUES ('Liz', 'Tapia', '5523169836', '456 Tested Ave.', 'Tester', 'TS', '67890', 'Pet Nanny 911', 'Pet Sitter');
INSERT INTO servicesProfiles (firstName, lastName, phoneNumber, streetAddress, city, state, zipCode, businessName, businessType) VALUES ('Javier', 'Arciniega', '5534668048', '789 W. Test Rd.', 'Approved', 'TS', '54721', 'Healthy Pet', 'Veterinary');
INSERT INTO servicesProfiles (firstName, lastName, phoneNumber, streetAddress, city, state, zipCode, businessName, businessType) VALUES ('Daniel', 'Trejo', '5521221235', '109 E. Testing Way', 'Testing', 'TS', '87534', 'Distresser', 'Dog Walker');
INSERT INTO servicesProfiles (firstName, lastName, phoneNumber, streetAddress, city, state, zipCode, businessName, businessType) VALUES ('Ricardo', 'Meza', '5519819487', '22 Tester Rd.', 'Tests', 'TS', '38943', 'Pet Doctor', 'Veterinary');
