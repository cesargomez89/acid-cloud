define(['marionette'], function(Marionette){
  var SignInView= Marionette.View.extend({
    el: 'body',

    initialize: function(){
    },

    ui: {
      "signin": "#sign-in"
    },

    events: {

      "click @ui.signin": function(){
        SC.connect(function() {
          SC.get('/me', function(me) { 
            sessionStorage.setItem('session', JSON.stringify(me));
          });
          window.location.assign("/");
        });
      }

    }

  });

  function initialize (){
    return new SignInView;
  };

  return { initialize: initialize }

});
