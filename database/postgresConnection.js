const pg = require('pg');
const connectionParams =
  'postgres://power_user:$poweruserpassword@ec2-52-91-104-187.compute-1.amazonaws.com/records';

const pgClient = new pg.Client(connectionParams);

// for local
// const pgClient = new pg.Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'records',
//   password: 'postgres',
//   post: '5432',
// });

pgClient.connect(err => {
  if (err) {
    console.log('error connecting to Postgres', err);
    throw err;
  } else {
    console.log('connected to Postgres');
  }
});

// placeholder template to assure that querying works

// pgClient.query('SELECT * FROM reviews limit 10', (err, res) => {
//   console.log('result of query', res.rows);
//   pgClient.end();
// });

module.exports = pgClient;
