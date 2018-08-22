const newrelic = require('newrelic');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const redis = require('redis');
const cluster = require('cluster');
const db = require('../database/dbAPI.js');

const port = process.env.PORT || 3004;

if (cluster.isMaster) {
  const cpuCount = require('os').cpus().length;
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
} else {
  const express = require('express');
  const app = express();
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    app.use(bodyParser.json());
    next();
  });
  app.use(compression());
  app.set('view cache', true);

  app.use('/:id', express.static(path.join(__dirname, '../public')));

  //for running on local host
  // const REDIS_PORT = process.env.REDIS_PORT;
  // const client = redis.createClient(REDIS_PORT);

  //for running on EC2
  const client = redis.createClient({ host: 'redis' });

  const cache = (req, res, next) => {
    const { locID } = req.params;
    client.get(locID, (error, data) => {
      if (error) {
        throw error;
      } else if (data !== null) {
        console.log('here');
        res.send(JSON.parse(data));
      } else {
        next();
      }
    });
  };

  const getHandler = (req, res) => {
    const { locID } = req.params;
    db.getById(locID, results => {
      client.set(locID, JSON.stringify(results));
      res.send(results);
    });
  };

  app.get('/locations/:locID/reviews', cache, getHandler);

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
}
