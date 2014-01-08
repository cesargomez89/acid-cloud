require.config({
  paths : {
    jquery : '/assets/js/libs/jquery',
    underscore : '/assets/js/libs/underscore',
    backbone : '/assets/js/libs/backbone',
    marionette : '/assets/js/libs/marionette',
    'backbone.wreqr' : '/assets/js/libs/backbone.wreqr',
    'backbone.babysitter' : '/assets/js/libs/backbone.babysitter'
  },
  shim : {
    jquery : {
      exports : 'jQuery'
    },
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    }
  }
});

define( ['marionette'], function (Marionette) {

    var AcidCloud = new Marionette.Application();

    // configuration, setting up regions, etc ...

    // export the app from this module
    return AcidCloud;
});
