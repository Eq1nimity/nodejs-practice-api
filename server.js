const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const bodyParser    = require('body-parser');
const db            = require('./config/db');

const app           = express();

const port          = 8000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)

  const db = database.db("nodejs-practice-api")
  require('./app/routes')(app, database);

  app.listen(port, () => {
    console.log('Listening on ' + port);
  });
});
