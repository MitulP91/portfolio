PortfolioApp.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'about(/)': 'about'
  },
  index: function() {
    var homeView = new PortfolioApp.Views.HomeView();
    this.renderView(homeView);
  },
  about: function() {
    var aboutView = new PortfolioApp.Views.AboutView();
    this.renderView(aboutView);
  },
  renderView: function(view) {
    $('.nav_menu_open').removeClass('nav_menu_open');
    var $large_panel = $('.large_panel');

    if($large_panel.length > 0) {
      $large_panel.animate({
        opacity: 0
      }, 600, function() {
        $large_panel.remove();
        view.render();
      });
    } else {
      view.render();
    }
  }
});