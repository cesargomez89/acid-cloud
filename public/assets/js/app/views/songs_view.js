define(
  ['marionette',
    'views/song_view'
],
function(Marionette, SongView){

  var SongsView = Marionette.CollectionView.extend({

    initialize: function(){
    },

    template: '#playlist-template',
    itemView: SongView.initialize(),
    itemViewContainer: 'tbody'

  });

  function initialize(songs){
    return new SongsView({collection: songs});
  };

  return { initialize: initialize }
});
