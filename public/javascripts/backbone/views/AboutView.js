PortfolioApp.Views.AboutView = Backbone.View.extend({
  el: '#app',
  initialize: function() {
    $(window).on('resize', this.resizeFunction);
  },
  template: _.template(
    '<div id="about" class="large_panel">' +
      '<div class="panel_content">' +
        '<div class="about_text_container">' +
          '<h2 class="about_text">Hello. My name is Mitul Patel.</h2>' +
          '<h2 class="about_text">I am a web developer based in NYC.</h2>' +
          '<h2 class="about_text">I like fun <a class="about_link" href="/projects" data-backbone="true">projects</a>.</h2>' +
          '<h2 class="about_text">I like challenging <a class="about_link" href="/projects" data-backbone="true">projects</a>.</h2>' +
          '<h2 class="about_text"><a class="about_link" href="/resume" data-backbone="true">Check me out</a>.</h2>' +
        '</div>' +
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
  }
});