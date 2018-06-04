var ObjectID = require('mongodb').ObjectID;

// Create Route
module.exports = function(app, database) {
  // Set db
  const db = database.db("nodejs-practice-api")

  // Read
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occured with read request.'});
      } else {
        res.send(item);
      }
    });
  });

  // Update
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body };
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      }
    });
  });

  // Create
  app.post('/notes', (req, res) => {
    const note = { playerData: req.body };
    db.collection('notes').insert(note, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occured with create request.' });
        } else {
          res.send(result.ops[0]);
        }
    });
  });

  // Delete
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occured with delete request.'});
      } else {
        res.send('item' + id + ' deleted!');
      }
    });
  });
};
