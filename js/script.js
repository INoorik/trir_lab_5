function changeSize(object, size, time) {
  object.animate({ width:size, height:size}, time);
}

function validateInput(object) {
  let rightVariant = ''
  for(let symbol of object.val()) {
    if(/\d/.test(symbol)) {
      rightVariant += symbol;
    }
  }
  object.val(rightVariant) ;
}

$(document).ready(function() {
  $('#min_size').keyup(function(){
    validateInput($('#min_size'));
  });
  $('#max_size').keyup(function(){
    validateInput($('#max_size'));
  });
});
