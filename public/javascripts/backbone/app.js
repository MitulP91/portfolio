// Start the app on document ready
var PortfolioApp = PortfolioApp || new (Backbone.View.extend({
  Models: {},
  Views: {},
  Collections: {},
  events: {
    'click .overlay': 'closeNav',
    'click .hamburger_nav': 'openNav',
    'click a[data-backbone="true"]': 'clickLink'
  },
  template: _.template(
    '<nav id="nav_menu">' +
      '<a href="#" class="hamburger_nav">' +
        '<span></span>' +
      '</a>' +
      '<ul id="link_list">' +
        '<li class="link"><a data-backbone="true" href="/">Home</a></li>' +
        '<li class="link"><a data-backbone="true" href="/about">About</a></li>' +
        '<li class="link"><a data-backbone="true" href="/projects">Projects</a></li>' +
        '<li class="link"><a data-backbone="true" href="/resume">Resume</a></li>' +
        '<li class="link"><a data-backbone="true" href="/contact">Contact</a></li>' +
      '</ul>' +
      '<ul id="social_list">' +
        '<li class="social"><a href="http://twitter.com/mitulp91" target="_blank"><i class="fa fa-twitter"></i></a></li>' +
        '<li class="social"><a href="http://github.com/mitulp91" target="_blank"><i class="fa fa-github-alt"></i></a></li>' +
      '</ul>' +
      '<div class="overlay"></div>' +
    '</nav>' +
    '<div id="left_border" class="fixed_border"></div>' +
    '<div id="right_border" class="fixed_border"></div>' +
    '<div id="top_border" class="fixed_border"></div>' +
    '<div id="bottom_border" class="fixed_border"></div>' +
    '<div id="app"></div>'
  ),
  start: function() {
    var appRouter = new PortfolioApp.AppRouter();
    console.log(appRouter);
    Backbone.history.start({ pushState: true });
  },
  render: function() {
    this.$el.html(this.template());

    // fade in app
    this.$('#app').fadeIn(1000);
  },
  openNav: function(e) {
    e.preventDefault();
    console.log('hi');
    this.$('#nav_menu').addClass('nav_menu_open');
  },
  closeNav: function(e) {
    e.preventDefault();
    console.log('hello');
    this.$('#nav_menu').removeClass('nav_menu_open');
  },
  clickLink: function(e) {
    e.preventDefault();
    Backbone.history.navigate(e.target.pathname, { trigger: true });
  }
}))({ el: document.body });

$(document).ready(function() {
  // Render PortfolioApp
  PortfolioApp.render();

  // Starts the application
  PortfolioApp.start();
});