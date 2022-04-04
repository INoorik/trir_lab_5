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

function generateRandomCoordinates() {
  let coordinates = {
    x: Math.round(Math.random() * $(document).width()),
    y: Math.round(Math.random() * $(document).height())
  };
  return coordinates;
}

let is_increased = false;
$(document).ready(function() {
    validateInput($('#min_size'));
    validateInput($('#max_size'));
    changeSize($('#box'), $('#min_size').val(), 0);
    $('#box').click(function() {
      changeSize($('#box'), $(is_increased?'#min_size':'#max_size').val(), 5000);
      is_increased = !is_increased;
    });
    setInterval(function() {
      let coordinates = generateRandomCoordinates();
      $('#box').animate({left: coordinates.x, top: coordinates.y}, 5000);
    }, 1000);
});
