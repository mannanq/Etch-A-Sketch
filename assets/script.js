$(document).ready(function() {
  // when page loads up
  // create grid layout of class box
  for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 16; j++) {
      $('.container').append('<div class="box"></div>');
    }
  }
});
