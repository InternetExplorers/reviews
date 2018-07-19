DROP DATABASE IF EXISTS records;

CREATE DATABASE records;

USE records;

CREATE TABLE users (
  id int NOT NULL,
  name varchar(20),
  location varchar(40),
  numFriends int,
  numPhotos int,
  numReviews int,
  PRIMARY KEY(id)
);

CREATE TABLE review (
  id int NOT NULL,
  message text NOT NULL,
  stars int NOT NULL,
  posted varchar(200) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(userID) REFERENCES Users (id),
);