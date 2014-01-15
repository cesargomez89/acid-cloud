define(['marionette', 'models/session'], function(Marionette, Session){
  var SignInView = Marionette.View.extend({
    el: 'header',

    initialize: function(){
      SC.initialize({
        client_id: '8d2b1d7c0001b646afda38787dd4bb28',
        redirect_uri: 'http://localhost.development:9000/signin'
      });
      self.model = Session.initialize();
    },

    ui: {
      "signin": "#sign-in"
    },

    events: {

      "click @ui.signin": function(){
        SC.connect(function() {
          SC.get('/me', function(me) { 
            self.model.set(me);
            debugger
          });
        });
      }

    }

  });

  function initialize (){
    return new SignInView;
  };

  return { initialize: initialize }

});
