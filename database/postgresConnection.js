const pg = require('pg');
const connectionParams =
  'postgres://power_user:$poweruserpassword@ec2-34-226-249-108.compute-1.amazonaws.com/records';

const pgClient = new pg.Client(connectionParams);

// const pgClient = new pg.Client({
//   user: 'postgres',
//   host: 'ec2-34-226-249-108.compute-1.amazonaws.com',
//   database: 'records',
//   password: '$password',
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
