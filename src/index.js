function isInt(value) {
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}
function getOperation(value, value1) {}
var input_value;
function getNumber() {
  input_value = document.getElementById("in").value;
  var char = [];
  var numbers = [];
  var operators = [];
  for (var i = 0; i < input_value.length; i++) {
    char[i] = input_value.charAt(i);
    if (isInt(input_value.charAt(i))) {
      numbers.push(input_value.charAt(i));
      operators.push(" ");
    } else {
      operators.push(input_value.charAt(i));
      numbers.push(" ");
    }
  }

  document.getElementById("display").innerHTML = numbers + "  " + operators;
}
document.getElementById("en").addEventListener("click", getNumber);
function MakeArray() {
  console.log(Array.from(input_value));
}
var input = document.getElementById("input_value");
/*input.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    getTFNumber();
  }
});*/
