const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/dbAPI.js');

const app = express();
const port = process.env.PORT || 3004;

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/:id', express.static(path.join(__dirname, '../public')));

app.get('/locations/:locID/reviews', (req, res) => {
  const { locID } = req.params;
  db.getById(locID, (err, results) => {
    if (err) {
      res.send(err);
      res.status(404).send();
    } else {
      res.send(results);
      res.status.send(200);
    }
  });
});

// add a new review based on reviewId
app.post('/locations/:locID/reviews', (req, res) => {
  const { locID } = req.params;
  db.postNewRecord(locID, (err, results) => {
    if (err) {
      res.send(err);
      res.status(404).send();
    } else {
      res.send(results);
      res.status(201).send();
    }
  });
});

// update a review based on reviewId
app.put('/locations/:locID/reviews/:reviewID', (req, res) => {
  const { locID, reviewID } = req.params;
  db.updateById(reviewID, (err, results) => {
    if (err) {
      res.send(err);
      res.status(404).send();
    } else {
      res.send(results);
      res.status(204).send();
    }
  });
});

// delete a review based on reviewId
app.delete('/locations/:locID/reviews/:reviewID', (req, res) => {
  const { locID, reviewID } = req.params;
  db.deleteById(reviewID, (err, results) => {
    if (err) {
      res.send(err);
      res.status(404).send();
    } else {
      res.send(results);
      res.status(204).send();
    }
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

module.exports = {
  app,
};
