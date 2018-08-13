CREATE keyspace IF NOT EXISTS records; 
USE records;

CREATE TABLE IF NOT EXISTS review_by_locationID_grouped (
  reviewid int auto incrementing primary key,
  locationid int,
  message text,
  stars int,
  posted string,
  userid int,
  username string,
  userLoc string,
  numFriends int,
  numPhotos int,
  numReview int,
  photoLoc string
  PRIMARY KEY (locationid, reviewid)
)
WITH CLUSTER ORDER BY (locationid)
//CREATE

//READ = getting all reviews for a location (group)
// all reviews will be partitioned by locationid, and within that partition, ordered by reviewid

CREATE TABLE review_by_locationID_grouped (
  reviewid int auto incrementing primary key,
  locationid int,
  message text,
  stars int,
  posted string,
  userid int,
  username string,
  userLoc string,
  numFriends int,
  numPhotos int,
  numReview int,
  photoLoc string
  PRIMARY KEY (locationid, reviewid)
)

SELECT * from review_by_locationID WHERE locationid = ???

//should also have a query for getting the n newest reviews?? if so, would need to partition by post date

//get number of reviews for a certain location
SELECT count(id) from review_by_locationID WHERE locationid = ??
(this table would only need reviewId, locationid)

//UPDATE
CREATE TABLE update_review_reviewID (
reviewid int auto incrementing primary key,
message text
)

UPDATE message WHERE reviewid = ???

//DELETE = remove based on reviewid
CREATE TABLE update_review_reviewID (
reviewid int auto incrementing primary key,
message text
)

DELETE message WHERE reviewid