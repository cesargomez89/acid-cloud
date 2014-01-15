define(['marionette', 'app'], function(Marionette, App){

  var Router = Marionette.AppRouter.extend({

    appRoutes: {
    },

    routes: {
      "home": "home",
      "": "signin"
    },

    initialize: function(){},

    signin: function(){
      return require(['views/signin_view'], function(Signin) {
        return Signin.initialize();
      });
    }
  });

  function initialize(){
    return new Router;
  };

  return { initialize: initialize }

});
