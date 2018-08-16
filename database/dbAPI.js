const path = require('path');
const db = require(path.join(__dirname, 'postgresConnection.js'));

const getById = function getAllReviewsOfRestaurant(restID, callback) {
  const queryStr = `select locations.locname, reviews.id, reviews.stars, reviews.posted, users.name, users.userloc, users.numfriends, users.photoloc, users.numphotos, users.numreviews, reviews.message from users, reviews, locations where locations.id=${restID} and reviews.userID = users.id and reviews.locID = locations.id`;
  db.query(queryStr, restID, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(data);
    }
  });
};

// can put an optional id parameter so that the restaurant can be specified
const addNewRecord = function getAllReviewsOfRestaurant(callback) {
  const queryStr = `INSERT INTO reviews (message, stars, posted, userId, locId) VALUES ('Veritas vos liberabit. Veritas vos liberabit. Veritas vos liberabit.', 3, '11-11-2011', 123, 8900100);`;
  db.query(queryStr, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(data);
    }
  });
};

const deleteById = function getAllReviewsOfRestaurant(restID, callback) {
  const queryStr = `DELETE FROM reviews WHERE id = ${restID};`;
  db.query(queryStr, restID, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(data);
    }
  });
};

const updateById= function getAllReviewsOfRestaurant(restID, callback) {
  const queryStr = `UPDATE reviews SET message = 'Veritas vos liberabit. Audi vide tace. Lorem ipsum dolor. Doler libero fuga.' WHERE id = ${restId}`

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
