/** Title: Study Curring Method.
    Created By: Prathamesh Naik.
    Purpose: Javascript Programing Practice.*/

var add = function(a) {
  return function(b) {
    return a + b;
  }
}
var substract = function(a) {
  return function(b) {
    return a - b;
  }
}
var multiplication = function(a) {
  return function(b) {
    return a * b;
  }
}
var division = function(a) {
  return function(b) {
    return a / b;
  }
}


var addTo = add(5);
console.log(addTo(4));

var substractTo = substract(3);
console.log(substractTo(2));

var multipy = multiplication(4);
console.log(multipy(5));

var divide = division(10);
console.log(divide(2));
