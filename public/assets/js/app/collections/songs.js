define(['backbone', 'models/song'], function(Backbone, Song){

  var Songs = Backbone.Collection.extend({
    model: Song
  });

  function initialize (playlists){
    return new Songs(playlists);
  };

  return { initialize: initialize }
});
