$(document).ready(function(){
  // Enables dragging for any 'video' element.
$('video').draggable();
// Makes them droppable in the '#playlist' target.
('#playlist').droppable(function(){
  var $playlist = $('#playlist').html();
  // Append the dropped element to '#yourPlaylist'.
  $('#yourPlaylist').append($playlist);
});
});
