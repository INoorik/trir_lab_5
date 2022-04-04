function changeSize(object, size, time) {
  object.animate({ width:size, height:size}, time);
}

function validateInput(object) {
  let rightVariant = ''
  for(let symbol of object[0].value) {
    if(/\d/.test(symbol)) {
      rightVariant += symbol;
    }
  }
  object[0].value = rightVariant;
}

$(document).ready(function() {
  $('#min_size').keyup(function(){
    validateInput($('#min_size'));
  });
});
