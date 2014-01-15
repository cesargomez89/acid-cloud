define(['backbone', 'localstorage'], function(Backbone){
  var Session = Backbone.Model.extend({ 
    defaults: {
      avatar_url: "https://i1.sndcdn.com/avatars-000027790472-1qof7b-large.jpg?d53bf9f",
      city: null,
      country: null,
      description: null,
      discogs_name: null,
      followers_count: 0,
      followings_count: 0,
      full_name: "unknown",
      id: null,
      kind: "user",
      myspace_name: null,
      online: true,
      permalink: null,
      permalink_url: null,
      plan: "Free",
      playlist_count: 0,
      primary_email_confirmed: false,
      private_playlists_count: 0,
      private_tracks_count: 0,
      public_favorites_count: 0,
      quota: Object,
      subscriptions: Array[0],
      track_count: 0,
      upload_seconds_left: 7200,
      uri: null,
      username: 'unknown',
      website: null,
      website_title: null
    },

    storage: new Backbone.LocalStorage('Session'),

    initialize: function(){
      this.on("change:online", function(){
        console.log('Logged out!');
      }); 
    }

  });

  function initialize (){
    return new Session;
  };


  return { initialize: initialize }
});
