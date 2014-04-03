$(document).ready(function(){
$('video').draggable();
$('#playlist').droppable(function(){
  var $playlist = $('#playlist').val();
  // I did not exactly need that fith line of code.
  $('#yourPlaylist').append($playlist);
});
});
