define(['marionette', 'app', 'views/signin_view', 'views/home_view'], function(Marionette, App, Signin, Home){

  var Router = Marionette.AppRouter.extend({

    appRoutes: {
    },

    routes: {
      "": "home",
      "signin": "signin"
    },

    initialize: function(){
      SC.initialize({
        client_id: '8d2b1d7c0001b646afda38787dd4bb28',
        redirect_uri: 'http://localhost.development:9000/signin'
      });
      if (!sessionStorage.key('session')){
        window.location.assign('/signin');
      }
    },

    signin: function(){
        return Signin.initialize();
    },

    home: function(){
        return Home.initialize();
    }

  });

  function initialize(){
    return new Router;
  };

  return { initialize: initialize }

});
