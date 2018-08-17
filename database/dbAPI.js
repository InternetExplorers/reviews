const path = require('path');
const db = require(path.join(__dirname, 'postgresConnection.js'));

const getById = function getAllReviewsOfRestaurant(restID, callback) {
  const queryStr =
    'SELECT locations.locname, reviews.id, reviews.stars, reviews.posted, users.name, users.userloc, users.numfriends, users.photoloc, users.numphotos, users.numreviews, reviews.message from users, reviews, locations WHERE locations.id=($1) AND reviews.userID = users.id AND reviews.locID = locations.id;';
  const values = [restID];
  db.query(queryStr, values, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(data.rows);
    }
  });
};

// can put an optional id parameter so that the restaurant can be specified
const postNewRecord = function addReview(restID, callback) {
  const queryStr =
    'INSERT INTO reviews (message, stars, posted, userId, locId) VALUES ($1, $2, $3, $4, $5) RETURNING *;';
  console.log('here is the restaurant id', restID);
  const values = [
    'Veritas vos liberabit. Veritas vos liberabit. Veritas vos liberabit.',
    3,
    '11-11-2011',
    123,
    restID,
  ];
  db.query(queryStr, values, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(data.rows);
    }
  });
};

const deleteById = function deleteReview(restID, callback) {
  const queryStr = 'DELETE FROM reviews WHERE id = $1';
  const values = [restID];
  console.log(restID);
  db.query(queryStr, values, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('successfully deleted the review');
      callback(data.rows);
    }
  });
};

const updateById = function updateReview(restID, callback) {
  const queryStr = `UPDATE reviews SET message = 'Veritas vos liberabit. Audi vide tace. Lorem ipsum dolor. Doler libero fuga.' WHERE id = $1`;
  const values = [restID];
  db.query(queryStr, values, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(data.rows);
    }
  });
};

module.exports = {
  getById,
  postNewRecord,
  deleteById,
  updateById,
};
