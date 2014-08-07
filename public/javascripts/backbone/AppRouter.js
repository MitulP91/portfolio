PortfolioApp.AppRouter = Backbone.Router.extend({
  routes: {
    '(/)': 'index',
    'about(/)': 'about',
    'resume(/)': 'resume'
  },
  index: function() {
    var homeView = new PortfolioApp.Views.HomeView();
    this.renderView(homeView);
  },
  about: function() {
    var aboutView = new PortfolioApp.Views.AboutView();
    this.renderView(aboutView);
  },
  resume: function() {
    var resumeView = new PortfolioApp.Views.ResumeView();
    this.renderView(resumeView);
  },
  renderView: function(view) {
    // Close the nav
    $('.nav_menu_open').removeClass('nav_menu_open');

    // Fade current content out and then fade new content in
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