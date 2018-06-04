
// Create Route
module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    // Create notes here.
    console.log(req.body)
    res.send('Hello')
  });
};
