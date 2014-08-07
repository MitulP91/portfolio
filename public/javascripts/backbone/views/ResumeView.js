PortfolioApp.Views.ResumeView = Backbone.View.extend({
  el: '#app',
  template: _.template(
    '<div id="resume" class="large_panel">' +
      '<div class="panel_content">' +
        '<div id="top_resume_panel">' +
          '<h2 id="resume_name">Mitul Patel</h2>' +
          '<h3 id="caption" class="resume_title">Full Stack Web Developer</h3>' +
          '<div id="resume_contact">' +
            '<ul id="contact_list">' +
              '<li><i class="fa fa-phone contact_icon"></i> <a href="tel:7324218288"> 732.421.8288</a></li>' +
              '<li><i class="fa fa-linkedin contact_icon"></i> <a href="https://www.linkedin.com/in/mitulp91/" target="_blank">www.linkedin.com/in/mitulp91/</a></li>' +
              '<li><i class="fa fa-envelope contact_icon"></i> <a href="mailto:mitulp91@gmail.com" target="_blank">mitulp91@gmail.com</a></li>' +
              '<li><i class="fa fa-github-alt contact_icon"></i> <a href="https://github.com/MitulP91" target="_blank">https://github.com/MitulP91</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div id="left_resume_panel" class="resume_panel">' +
          '<h3 class="resume_title">Experience</h3>' +
          '<div class="experience_container">' +
            '<h4 class="experience_title">Human IG <span><span class="separator">|</span> New York, NY</span></h4>' +
            '<h4 class="experience_position">Interactive Developer</h4>' +
            '<p class="experience_timeline">February 2014 - August 2014</p>' +
            '<ul class="experience_bullets">' +
              '<li>Worked on a small development team as a full stack web developer.</li>' +
              '<li>Utilized PHP and frameworks such as CakePHP to create websites for both client-based and internal projects.</li>' +
              '<li>Learned to use various CMS platforms such as WordPress and Shopify.</li>' +
            '</ul>' +
          '</div>' +
          '<div class="experience_container">' +
            '<h4 class="experience_title">General Assembly <span><span class="separator">|</span> New York, NY</span></h4>' +
            '<h4 class="experience_position">Web Development Immersive Student</h4>' +
            '<p class="experience_timeline">August 2013 - November 2013</p>' +
            '<ul class="experience_bullets">' +
              '<li>Completed a 12 week full-stack web development immersive program.</li>' +
              '<li>Built various projects using technologies such as Ruby on Rails, Javascript, HTML5, CSS3, Backbone.js, SQL, NoSQL, and others.</li>' +
            '</ul>' +
          '</div>' +
          '<div class="experience_container">' +
            '<h4 class="experience_title">StylingOn <span><span class="separator">|</span> New Brunswick, NJ</span></h4>' +
            '<h4 class="experience_position">Front End Web Developer</h4>' +
            '<p class="experience_timeline">June 2013 - August 2013</p>' +
            '<ul class="experience_bullets">' +
              '<li>Worked on styling the UI for this fashion startup</li>' +
              '<li>Used CSS and Javascript to give their website a new feel and improve their user flow.</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div id="right_resume_panel" class="resume_panel">' +
          '<h3 class="resume_title">Skills</h3>' +
          '<h4 class="skill_title">Programming Languages</h4>' +
          '<div class="skill_container">' +
            '<p>Ruby, JavaScript, PHP</p>' +
          '</div>' +
          '<h4 class="skill_title">Frameworks</h4>' +
          '<div class="skill_container">' +
            '<p>Ruby on Rails, Node.js (Express), Backbone.js, CakePHP, Sinatra</p>' +
          '</div>' +
          '<h4 class="skill_title">Other Skills</h4>' +
          '<div class="skill_container">' +
            '<p>HTML5, CSS3, LESS/SASS, jQuery, D3.js, KineticJS, Redis, SQL (MySQL, PostgreSQL), NoSQL (MongoDB), Version Control (git), TDD, Agile</p>' +
          '</div>' +
          '<h3 class="resume_title">Projects</h3>' +
          '<div class="project_container">' +
            '<h4 class="project_title"><a href="http://www.boomroom.co" target="_blank">Boom Room</a><a href="http://www.boomroom.co" target="_blank" class="project_visit">visit</a></h4>' +
            '<p class="project_description">A social music listening experience. It allows people to create playlists on the fly with groups of friends no matter where you are, and listen to them together at the same time.</p>' +
          '</div>' +
          '<div class="project_container">' +
            '<h4 class="project_title"><a href="http://www.revenge-the-revenge.com" target="_blank">Revenge: The Revenge</a><a href="http://www.revenge-the-revenge.com" target="_blank" class="project_visit">visit</a></h4>' +
            '<p class="project_description">Revenge: The Revenge is a retro 2D sidescroller game infleuenced by classics such as Castlevania. It is fully browser based, and built using a JavaScript game engine called MelonJS.</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>'
  ),
  render: function() {
    this.$el.html(this.template());

    // fade in initial view
    this.$('.large_panel').animate({
      opacity: 1,
      top: '5%'
    }, 800);
  }
});