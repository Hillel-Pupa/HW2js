let app7input = prompt("enter three-digit number", "");
let d = parseInt(app7input[0]);
let e = parseInt(app7input[1]);
let f = parseInt(app7input[2]);
if (d === e && e === f) {
  alert("all digits are equal");
} else if (d === e || e === f || f === d) {
  alert("two digits are equal");
} else {
  alert("all digits are not equal");
}
