const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/dbAPI');

const app = express();
const port = process.env.PORT || 3004;

app.use(bodyParser.json());

app.use('/', (req, res, next) => {
  console.log(req.body);
  next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/locations/:locID', (req, res) => {
  console.log('You are asking for info on location #: ', req.params.locID);
  db.getById(req.params.locID, (results) => {
    if (results) {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
