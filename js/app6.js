let app6input = prompt("enter three-digit number", "");
let a = parseInt(app6input[0]);
let b = parseInt(app6input[1]);
let c = parseInt(app6input[2]);
let digitSum = a + b + c;
alert("digits sum is " + digitSum);
let digitSumIsEven = digitSum % 2 === 0;
if (digitSumIsEven) {
  alert("digit sum is even");
} else {
  alert("digit sum is not even");
}
let isMultipleOf5 = digitSum % 5 === 0;
if (isMultipleOf5) {
  alert("digit sum is multiple of 5");
} else {
  alert("digit sum is not multiple of 5");
}
let isProduct = a * b * c > 100;
if (isProduct) {
  alert("the product of three digits is bigger than 100");
} else {
  alert("the product of three digits is not bigger than 100");
}
