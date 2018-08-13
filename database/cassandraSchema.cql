--keyspaces are like databases
CREATE KEYSPACE IF NOT EXISTS records WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};
USE records;

CREATE TABLE review_by_locationID_grouped (
  reviewid int,
  locationid int,
  message text,
  stars int,
  posted text,
  userid int,
  username text,
  userLoc text,
  numFriends int,
  numPhotos int,
  numReviews int,
  photoLoc text,
  PRIMARY KEY (locationid, reviewid)
);

COPY review_by_locationID_grouped (reviewid, message, stars, posted, userid, locationid) FROM '/Users/kristiedesiree/Desktop/reviews/database/reviewData.csv';