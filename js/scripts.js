$(document).ready(function() {
  $("#form1").submit(function(event){

    event.preventDefault();
    var number1 =parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var subTotals = [];

    for (var index = 0; index <= number1; index += number2) {
      subTotals.push(index);
    };
    subTotals.shift();
    alert(subTotals);
  });
});
