function changeSize(object, size, time) {
  $('#box').stop();
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
    $('#start_button').click(function(){
      $('form').hide();
      $('#box').show();
      changeSize($('#box'), $('#min_size').val(), 0);
      $('#box').click(function() {
        changeSize($('#box'), $(is_increased?'#min_size':'#max_size').val(), 1000);
        is_increased = !is_increased;
      });
      setInterval(function() {
        let coordinates = generateRandomCoordinates();
        $('#box').animate({left: coordinates.x, top: coordinates.y}, 2000);
      }, 3000);
      setInterval(function() {
        $('#coordinates').text(`${Math.round($('#box').position().left)}:${
          Math.round($('#box').position().top)}`);
      }, 100);
    });

});
