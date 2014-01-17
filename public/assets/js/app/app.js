define(['marionette'], function(Marionette) {
  var App;
  App = new Marionette.Application();
  App.Views = {},
  App.vars  = {};
  App.addRegions({
    sidebarRegion: "#sidebar-list",
    mainRegion: "#main",
    footerRegion: "footer",
    headerRegion: "header"
  });
  App.vent.on("routing:started", function() {
    Backbone.history.start({pushState: true, root: '/'});
  });

  _.templateSettings = {
    evaluate:    /\{\{#([\s\S]+?)\}\}/g,            // {{# console.log("blah") }}
    interpolate: /\{\{[^#\{]([\s\S]+?)[^\}]\}\}/g,  // {{ title }}
    escape:      /\{\{\{([\s\S]+?)\}\}\}/g,         // {{{ title }}}
  };
  return App;
});
