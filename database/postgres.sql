DROP DATABASE IF EXISTS records;

CREATE DATABASE records;

\c records;

CREATE TABLE IF NOT EXISTS users (
  id int NOT NULL,
  name varchar(20),
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
  posted date,
  userID int,
  locID int,
  PRIMARY KEY(id),
  FOREIGN KEY(locID) REFERENCES locations (id),
  FOREIGN KEY(userID) REFERENCES users (id)
);

do $$
FOR i IN 1...100 LOOP
  COPY locations FROM '/Users/kristiedesiree/Desktop/reviews/database/data' || i ||'.csv' DELIMITER ',';
END LOOP;
$$

