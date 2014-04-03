$(document).ready(function(){
$('video').draggable();
$('#playlist').droppable(function(){
  var $playlist = $('#playlist').val();
  var playlistScreen = $('<h4><a href="playlist.html">View Your Playlist</a></h4>')
  $('#yourPlaylist').append($playlist);
});
});
