let app7input = prompt("enter three-digit number", "");
let digit1 = parseInt(app7input[0]);
let digit2 = parseInt(app7input[1]);
let digit3 = parseInt(app7input[2]);
if (digit1 === digit2 && digit2 === digit3) {
  alert("all digits are equal");
} else if (digit1 === digit2 || digit2 === digit3 || digit3 === digit1) {
  alert("two digits are equal");
} else {
  alert("all digits are not equal");
}
