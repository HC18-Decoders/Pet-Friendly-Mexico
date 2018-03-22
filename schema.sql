DROP DATABASE IF EXISTS profiles;

CREATE DATABASE profiles;

use profiles;

CREATE TABLE vetProfile(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  phoneNumber INT NOT NULL,
  address TEXT
);

INSERT INTO (id, firstName, lastName, phoneNumber, address) VALUES (1, 'Marcella', 'Torres', 5540208533, '123 Test St., Testing, TS, 12345');
INSERT INTO (id, firstName, lastName, phoneNumber, address) VALUES (2, 'Alenjandro', 'Rodriguez', 5523164288, '456 Tested Ave., Tester, TS,67890');
INSERT INTO (id, firstName, lastName, phoneNumber, address) VALUES (3, 'Jacqueline', 'Romero', 5534668497, '789 W. Test Rd., Approved, TS, 54721');
INSERT INTO (id, firstName, lastName, phoneNumber, address) VALUES (4, 'Jesse', 'Nava', 5521224558, '109 E. Testing Way, Testing, TS, 87534');
INSERT INTO (id, firstName, lastName, phoneNumber, address) VALUES (5, 'Jack', 'Cervantes', 5519814312, '22 Tester Rd., Tests, TS, 38943');

CREATE TABLE petProfile(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  petName varchar(255) NOT NULL,
  age INT NOT NULL,
  breed varchar(255) NOT NULL,
  vaccines varchar(255) NOT NULL,
  dewormed BIT NOT NULL,
  smallDescription TEXT NOT NULL
);

INSERT INTO (id, petName, age, breed, vaccines, dewormed, smallDescription) VALUES (1, 'Camilo', 2, 'Pomeranian', 'Rabies, Parvovirus, and Lyme Disease', 'yes', 'Agressive, Furry, Anti-social');
INSERT INTO (id, petName, age, breed, vaccines, dewormed, smallDescription) VALUES (2, 'Jaws', 3, 'Pitbull', 'Rabies, Parvovirus, Bordetella, Leptospirosis, and Distemper', 'yes', 'Playful, Well behaved, Freindly');
INSERT INTO (id, petName, age, breed, vaccines, dewormed, smallDescription) VALUES (3, 'Giggles', 1, 'French Poddle', 'Rabies, Parvovirus, Leptospirosis, and Lyme Disease', 'yes', 'Non-agressive, Well behaved, Freindly with kids');
INSERT INTO (id, petName, age, breed, vaccines, dewormed, smallDescription) VALUES (4, 'Balu', 3, 'Schnouzer', 'Rabies, Parvovirus, Lyme Disease, Leptospirosis, and Distemper', 'yes', 'Agressive, Hyperactive, not friendly with kids');
INSERT INTO (id, petName, age, breed, vaccines, dewormed, smallDescription) VALUES (5, 'Spike', 4, 'Doberman', 'Rabies, Lyme Disease, Distemper', 'no', 'Well behaved, Protective, Playful with kids');
