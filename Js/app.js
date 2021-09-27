let firstNumber = Number(prompt('enter your number', 0));
let secondNumber = Number(prompt('enter the second nummber', 0));

if(firstNumber > secondNumber) {
    alert(firstNumber + ' is ' + 'bigger');
}
if(firstNumber === secondNumber) {
    alert('Numbers are equal')
}
else {
    alert(secondNumber + ' is ' + 'bigger')
}
