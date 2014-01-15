define(['marionette', 'views/signin_view'], function(Marionette, SignIn){

  var Router = Marionette.AppRouter.extend({

    appRoutes: {
    },

    routes: {
      "": "home"
    },

    initialize: function(){},

    home: function(){
      this.signInView = SignIn.initialize();
      console.log(this.signInView);
    }
  });

  function initialize(){
    var router = new Router();
  }

  return {
    initialize: initialize
  };

});
