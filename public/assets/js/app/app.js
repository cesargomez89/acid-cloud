define( [ 'router' ], function( Router) {

  var initialize = function() {
    Router.initialize();
    Backbone.history.start({pushState: true, root: '/'});
  };

  return {
    initialize: initialize
  };

});
