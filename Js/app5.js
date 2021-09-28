let numeral = parseInt(prompt('enter your number', ''))
let rest = numeral % 10 
let firstDigit = parseInt(numeral / 10)

if(firstDigit > rest) {
    alert(' first digit ' + firstDigit + ' is bigger ')
}
else {
    alert(' second digit ' + rest + ' is bigger ')
}