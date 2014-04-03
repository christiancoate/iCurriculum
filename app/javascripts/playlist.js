$(document).ready(function(){
$('video').draggable();
$('#playlist').droppable(function(){
  var $playlist = $('video').val();
  var playlistScreen = $('<h4><a href="playlist.html">View Your Playlist</a></h4>')
});
});
