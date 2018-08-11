const pg = require('pg');
// const connectionParams = 'postgres://postgres:postgres@localhost:5432/postgres';

// const pgClient = new pg.Client(connectionParams);

const pgClient = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'records',
  password: 'postgres',
  post: '5432',
});

pgClient.connect((err) => {
  if (err) {
    console.log('error connecting to Postgres', err);
    throw err;
  } else {
    console.log('connected to Postgres');
  }
});

// placeholder template to assure that querying works

/*
pgClient.query('', (err, res) => {
  console.log('result of query', res);
  pgClient.end();
});
*/
