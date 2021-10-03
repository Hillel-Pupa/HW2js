let app8input = prompt("enter six-digit number", "");
let firstDigit = parseInt(app8input[0]);
let secondDigit = parseInt(app8input[1]);
let thirdDigit = parseInt(app8input[2]);
let fourthDigit = parseInt(app8input[3]);
let fifthDigit = parseInt(app8input[4]);
let sixthDigit = parseInt(app8input[5]);
if (
  fifthDigit === sixthDigit ||
  secondDigit === fifthDigit ||
  thirdDigit === fourthDigit
) {
  alert("the number is mirrored");
} else {
  alert("the number is not mirrored");
}
