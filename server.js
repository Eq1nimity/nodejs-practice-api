const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const bodyParser    = require('body-parser');

const app           = express();
const port          = 8000;

require('./app/routes')(app, {}); // {} is an empty object. 

// Setup listener
app.listen(port, () => {
  console.log('Listening on ' + port);
});
