define(['marionette'], function(Marionette){
  var SongView = Marionette.ItemView.extend({
    template: '#song-template'
  });

  function initialize(){
    return SongView;
  };

  return { initialize: initialize }
});
