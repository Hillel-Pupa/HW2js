const num = parseInt(prompt("enter your number", ""));
const lastDigit = num % 10;
const isOdd = lastDigit % 2;
if (isOdd) {
  alert(" the number " + lastDigit + " is odd ");
} else {
  alert(" the number " + lastDigit + " is even ");
}
