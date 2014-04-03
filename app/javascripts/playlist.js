$(document).ready(function(){
$('video').draggable();
$('#playlist').droppable(function(){
  var $playlist = $('#playlist').html();
  // I do not exactly need that fith line of code.
  $('#yourPlaylist').append($playlist);
});
});
