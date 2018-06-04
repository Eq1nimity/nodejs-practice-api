
// Create Route
module.exports = function(app, database) {
  app.post('/notes', (req, res) => {
    // Create notes here.
    const note = { playerData: req.body };
    const db = database.db("nodejs-practice-api")
      db.collection('notes').insert(note, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occured.' });
        } else {
          res.send(result.ops[0]);
        }
    });
  });
};
