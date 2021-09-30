let app8input = prompt("enter six-digit number", "");
let g = parseInt(app8input[0]);
let h = parseInt(app8input[1]);
let i = parseInt(app8input[2]);
let j = parseInt(app8input[3]);
let k = parseInt(app8input[4]);
let l = parseInt(app8input[5]);
if (g === l || h === k || i === j) {
  alert("the number is mirrored");
} else {
  alert("the number is not mirrored");
}
