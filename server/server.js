const express = require('express');
const app = express()
const port = 4444

app.use(express.json());

const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'ctagdb',
  password: 'postgres',
  port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
  
    client.query('SELECT NOW()', (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      console.log(result.rows)
    })
  });
  
  
app.get('/', (req, res) => {
    pool.query(`SELECT * from "user" limit 1`)
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(500).send("Query Failed: " + err);
        })
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;