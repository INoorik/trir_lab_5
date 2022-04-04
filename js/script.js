function changeSize(object, size, time) {
  object.animate({ width:size, height:size}, time);
}

function validateInput(object) {
  object.keydown(function(event) {
    if(!/\d|Backspace/.test(event.originalEvent.key)) {
      event.preventDefault();
    }
  });
}

$(document).ready(function() {
    validateInput($('#min_size'));
    validateInput($('#max_size'));
});
