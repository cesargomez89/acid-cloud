define(
  [
    'marionette',
    'app',
    'views/signin_view',
    'views/songs_view',
    'views/home_view',
    'collections/songs'
],
function(Marionette, App, Signin, SongsView,Home, Songs){

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
      if (!sessionStorage.key('session') && window.location.pathname !== '/signin'){
        window.location.assign('/signin');
      }
    },

    signin: function(){
      if (sessionStorage.key('session')){
        window.location.assign('/');
      }
      else{
        return Signin.initialize();
      }
    },

    home: function(){
      var session = JSON.parse(sessionStorage.session);
      var songs ;
      SC.get('/users/'+session.username+'/playlists', function(playlists) {
        songs = Songs.initialize(playlists);
        App.sidebarRegion.show(SongsView.initialize(songs));
        App.mainRegion.show(Home.initialize());
      });

    }

  });

  function initialize(){
    return new Router;
  };

  return { initialize: initialize }

});
