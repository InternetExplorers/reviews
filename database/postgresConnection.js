const pg = require('pg');
// const connectionParams = 'postgres://postgres:postgres@localhost:5432/postgres';

// const pgClient = new pg.Client(connectionParams);

const pgClient = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'records',
  password: 'postgres',
  post: '5432'
});

pgClient.connect((err) => {
  if (err) {
    console.log('error connecting to Postgres', error);
    throw err;
  } else {
    console.log('connected to Postgres');
  }
});

pgClient.query('SELECT * FROM locations', (err, res) => {
  console.log('result of query', res);
  pgClient.end();
});