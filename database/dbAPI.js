const path = require('path');
const db = require(path.join(__dirname, 'index'));

const getById = function getAllReviewsOfRestaurant(restID, callback) {
  const queryStr = `select locations.locname, reviews.stars, reviews.posted, users.name, users.userloc, users.numfriends, users.photoloc, users.numphotos, users.numreviews, reviews.message from users, reviews, locations where locations.id=${restID} and reviews.userID = users.id and reviews.locID = locations.id`;
  db.query(queryStr, restID, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(data);
    }
  });
};

module.exports = {
  getById,
};
