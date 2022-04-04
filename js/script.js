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

let is_increased = false;
$(document).ready(function() {
    validateInput($('#min_size'));
    validateInput($('#max_size'));
    changeSize($('#box'), $('#min_size').val(), 0);
    $('#box').click(function() {
      changeSize($('#box'), $(is_increased?'#min_size':'#max_size').val(), 1000);
      is_increased = !is_increased;
    });
});
