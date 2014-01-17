define(['marionette', 'semantic'], function(Marionette){
  var HomeView = Marionette.View.extend({
    el: 'body',

    initialize: function(){
    },

    ui: {
      'sidebarbutton' : '#js-sidebar-button',
      'sidebar' : '.sidebar.right'
    },

    events: {
      'click @ui.sidebarbutton': function(){
        self.$(this.ui.sidebar).sidebar({overlay: true});
        self.$(this.ui.sidebar).sidebar('toggle');
      }
    }

  });

  function initialize (){
    return new HomeView;
  };

  return { initialize: initialize }

});
