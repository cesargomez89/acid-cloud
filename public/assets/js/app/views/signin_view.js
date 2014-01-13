SC.initialize({
  client_id: '8d2b1d7c0001b646afda38787dd4bb28',
  redirect_uri: 'http://localhost.development:9000/signin'
});

SC.connect(function() {
  SC.get('/me', function(me) { 
    alert('Hello, ' + me.username); 
  });
});
