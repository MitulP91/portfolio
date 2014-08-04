module.exports = function(app) {
  // root route
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  app.get('/about', function(req, res) {
    res.render('index.ejs');
  });
};