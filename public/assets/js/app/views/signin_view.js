define(['marionette'], function(Marionette){
  var SignInView = Marionette.View.extend({
    initialize: function(){
      SC.initialize({
        client_id: '8d2b1d7c0001b646afda38787dd4bb28',
        redirect_uri: 'http://localhost.development:9000/signin'
      });
    },

    ui: {
      "signin": "#sign-in"
    },

    events: {

      "click @ui.signin": function(){
        SC.connect(function() {
          SC.get('/me', function(me) { 
            alert('Hello, ' + me.username); 
          });
        });
      }

    }

  });

  function initialize(){
    new SignInView();
  }

  return {
    initialize: initialize
  };
});
