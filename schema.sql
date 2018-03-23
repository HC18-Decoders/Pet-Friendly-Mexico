DROP DATABASE IF EXISTS profiles;

CREATE DATABASE profiles;

use profiles;

CREATE TABLE vetProfile(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  phone_number char(20) NOT NULL,
  address TEXT
);

INSERT INTO vetProfile (first_name, last_name, phone_number, address) VALUES ('Marcella', 'Torres', '5540208533', '123 Test St., Testing, TS, 12345');
INSERT INTO vetProfile (first_name, last_name, phone_number, address) VALUES ('Alenjandro', 'Rodriguez', '5523164288', '456 Tested Ave., Tester, TS,67890');
INSERT INTO vetProfile (first_name, last_name, phone_number, address) VALUES ('Jacqueline', 'Romero', '5534668497', '789 W. Test Rd., Approved, TS, 54721');
INSERT INTO vetProfile (first_name, last_name, phone_number, address) VALUES ('Jesse', 'Nava', '5521224558', '109 E. Testing Way, Testing, TS, 87534');
INSERT INTO vetProfile (first_name, last_name, phone_number, address) VALUES ('Jack', 'Cervantes', '5519814312', '22 Tester Rd., Tests, TS, 38943');

CREATE TABLE petProfile(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  pet_name varchar(255) NOT NULL,
  age INT NOT NULL,
  breed varchar(255) NOT NULL,
  vaccines varchar(255) NOT NULL,
  dewormed varchar(20) NOT NULL,
  small_description TEXT NOT NULL
);

INSERT INTO petProfile (pet_name, age, breed, vaccines, dewormed, small_description) VALUES ('Camilo', 2, 'Pomeranian', 'Rabies, Parvovirus, and Lyme Disease', 'yes', 'Agressive, Furry, Anti-social');
INSERT INTO petProfile (pet_name, age, breed, vaccines, dewormed, small_description) VALUES ('Jaws', 3, 'Pitbull', 'Rabies, Parvovirus, Bordetella, Leptospirosis, and Distemper', 'yes', 'Playful, Well behaved, Freindly');
INSERT INTO petProfile (pet_name, age, breed, vaccines, dewormed, small_description) VALUES ('Giggles', 1, 'French Poddle', 'Rabies, Parvovirus, Leptospirosis, and Lyme Disease', 'yes', 'Non-agressive, Well behaved, Freindly with kids');
INSERT INTO petProfile (pet_name, age, breed, vaccines, dewormed, small_description) VALUES ('Balu', 3, 'Schnouzer', 'Rabies, Parvovirus, Lyme Disease, Leptospirosis, and Distemper', 'yes', 'Agressive, Hyperactive, not friendly with kids');
INSERT INTO petProfile (pet_name, age, breed, vaccines, dewormed, small_description) VALUES ('Spike', 4, 'Doberman', 'Rabies, Lyme Disease, Distemper', 'no', 'Well behaved, Protective, Playful with kids');
