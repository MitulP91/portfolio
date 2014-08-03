module.exports = function(app) {
  // root route
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });
};