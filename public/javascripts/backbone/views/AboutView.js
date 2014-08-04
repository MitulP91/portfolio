PortfolioApp.Views.AboutView = Backbone.View.extend({
  el: '#app',
  initialize: function() {

  },
  template: _.template(
    '<div id="about" class="large_panel">' +
      '<div class="panel_content">' +
        '<h2 class="about_text">' +
          '<span class="important">Hello.</span> My name is <span class="important">Mitul Patel.</span><br/> I am a web developer based in NYC. <br/>I like fun projects. </br>I like challenging projects. <br/>Check me out.' +
        '</h2>' +
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