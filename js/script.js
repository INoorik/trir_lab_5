function changeSize(object, size, time) {
  $('#box').stop();
  object.animate({ width:size, height:size}, time);
}

function preventNonNumbers(object) {
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

function isUserInputCorrect(minSizeObject, maxSizeObject) {
  let numberRegExp = /^ *\d+ *$/;
  if(!numberRegExp.test(minSizeObject.val()) ||
   !numberRegExp.test(maxSizeObject.val())){
     return false;
   }
  if(minSizeObject.val()-0 > maxSizeObject.val()-0) {
    return false;
  }
  return true;
}

let is_increased = false;
$(document).ready(function() {
    preventNonNumbers($('#min_size'));
    preventNonNumbers($('#max_size'));
    $('#start_button').click(function(){
      if(!isUserInputCorrect($('#min_size'), $('#max_size'))) {
        alert('Введите, пожалуйста, меньший размер в поле для минимального \
          размера, а большее - в поле для максимально');
        return;
      }
      $('form').hide();
      $('#box').show();
      changeSize($('#box'), $('#min_size').val(), 0);
      $('#box').click(function() {
        changeSize($('#box'), $(is_increased?'#min_size':'#max_size').val(),
          1000);
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
