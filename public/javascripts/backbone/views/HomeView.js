PortfolioApp.Views.HomeView = Backbone.View.extend({
  el: '#app',
  initialize: function() {
    $(window).on('resize', this.resizeFunction);
  },
  events: {
    'click a': 'clickLink'
  },
  template: _.template(
    '<div id="home" class="large_panel">' +
      '<div class="panel_content">' +
        '<h1 id="my_name">Mitul Patel</h1>' +
        '<ul id="options_list">' +
          '<li class="option"><a href="/about"><i class="fa fa-male icon"></i></a></li>' +
          '<li class="option"><a href="/projects"><i class="fa fa-folder icon"></i></a></li>' +
          '<li class="option"><a href="/resume"><i class="fa fa-cloud-upload icon"></i></a></li>' +
          '<li class="option"><a href="/contact"><i class="fa fa-phone icon"></i></a></li>' +
        '</ul>' +
      '</div>' +
    '</div>'
  ),
  render: function() {
    this.$el.html(this.template());
    this.resizeFunction();

    // fade in initial view
    this.$('.large_panel').animate({
      opacity: 1,
      top: '10%'
    }, 800);
  },
  resizeFunction: function() {
    // shift text to middle
    var $panel_content = this.$('.panel_content');
    setTimeout(function() {
      var width = $panel_content.width();
      var height = $panel_content.height();

      this.$('.panel_content').css({
        marginTop: '-' + height / 2 + 'px',
        marginLeft: '-' + width / 2 + 'px'
      });
    }, 0);
  },
  clickLink: function(e) {
    e.preventDefault();
    Backbone.history.navigate(e.target.pathname, { trigger: true });
  }
});