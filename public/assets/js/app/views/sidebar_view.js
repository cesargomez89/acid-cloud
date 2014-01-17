define(['marionette', 'views/song_view'], function(Marionette, SongView){
  var SidebarView = Marionette.CompositeView.extend({

    template: '#playlist-template',
    itemView: SongView.initialize(),
    itemViewContainer: 'tbody',

    initialize: function(){
    },

  });

  function initialize (){
    return new SidebarView;
  };

  return { initialize: initialize }

});
