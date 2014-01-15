define(['marionette'], function(Marionette) {
  var App;
  App = new Marionette.Application();
  App.Views = {},
  App.vars  = {};
  App.addRegions({
    sidebarRegion: "#sdebar-region",
    mainRegion: "#main-region",
    footerRegion: "#footer-region",
    headerRegion: "header"
  });
  App.vent.on("routing:started", function() {
    Backbone.history.start({pushState: true, root: '/'});
  });
  return App;
});
