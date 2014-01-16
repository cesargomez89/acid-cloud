define(['marionette'], function(Marionette){
  var HomeView = Marionette.View.extend({
    el: 'body',

    initialize: function(){
    },

  });

  function initialize (){
    return new HomeView;
  };

  return { initialize: initialize }

});
