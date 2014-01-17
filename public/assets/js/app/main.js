require.config({
  paths : {
    jquery : '/assets/js/libs/jquery',
    semantic: '/assets/js/libs/semantic',
    underscore : '/assets/js/libs/underscore',
    backbone : '/assets/js/libs/backbone',
    localstorage: '/assets/js/libs/backbone.localstorage',
    marionette : '/assets/js/libs/marionette',
    'backbone.wreqr' : '/assets/js/libs/backbone.wreqr',
    'backbone.babysitter' : '/assets/js/libs/backbone.babysitter'
  },
  shim : {
    jquery : {
      exports : 'jQuery'
    },
    semantic: ['jquery'],
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    }
  }
});

define(['app', 'router'], function(App,Router) {
  App.addInitializer(function() {
    App.Router = Router.initialize();
    return App.vent.trigger("routing:started");
  });
  return App.start();
});
