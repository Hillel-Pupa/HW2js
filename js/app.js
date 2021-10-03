let firstNumber = parseInt(prompt("enter your number", 0));
let secondNumber = parseInt(prompt("enter the second nummber", 0));

if (firstNumber > secondNumber) {
  alert(firstNumber + " is " + "bigger");
} else if (firstNumber === secondNumber) {
  alert("Numbers are equal");
} else {
  alert(secondNumber + " is " + "bigger");
}
