let firstNum = prompt("enter the first number", "");
let secondNum = prompt("enter the second number", "");
let firstCount = firstNum % secondNum;
let secondCount = secondNum % firstNum;

if (firstCount === 0) {
  alert(
    " the second number " +
      secondNum +
      " is divider of " +
      " first number " +
      firstNum
  );
} else {
  alert(
    " the second number " +
      secondNum +
      " is not divider of " +
      " first number " +
      firstNum
  );
}
if (secondCount === 0) {
  alert(
    " the first number " +
      firstNum +
      " is divider of " +
      " second number " +
      secondNum
  );
} else {
  alert(
    " the first number " +
      firstNum +
      " is not divider of " +
      " second number " +
      secondNum
  );
}
