DROP DATABASE IF EXISTS records;

CREATE DATABASE records;

\c records;

CREATE TABLE IF NOT EXISTS users (
  id int NOT NULL,
  name varchar(50),
  userLoc varchar(40),
  numFriends int,
  numPhotos int,
  numReviews int,
  photoLoc varchar(200),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS locations (
  id int NOT NULL,
  locname varchar(100),
  PRIMARY KEY(ID)
);

CREATE TABLE IF NOT EXISTS reviews (
  id int NOT NULL,
  message text,
  stars int NOT NULL,
  posted varchar(15),
  userID int,
  locID int,
  PRIMARY KEY(id),
  FOREIGN KEY(locID) REFERENCES locations (id),
  FOREIGN KEY(userID) REFERENCES users (id)
);

--shut off foreign key checks to decrease insertion time
ALTER TABLE users DISABLE TRIGGER ALL;
ALTER TABLE locations DISABLE TRIGGER ALL;
ALTER TABLE reviews DISABLE TRIGGER ALL;

--to load into locations table (there will be files numbered 1-5)
COPY reviews FROM '/Users/kristiedesiree/Desktop/reviews/database/data1.csv' DELIMITER ',';

--to load into users table (there will be files numbered 1-200)
COPY reviews FROM '/Users/kristiedesiree/Desktop/reviews/database/userData200.csv' DELIMITER ',';

--to load into reviews table (there will be files numbered 1-500)
COPY reviews FROM '/Users/kristiedesiree/Desktop/reviews/database/reviewData500.csv' DELIMITER ',';
