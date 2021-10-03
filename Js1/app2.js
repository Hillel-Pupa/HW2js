const foot = 0.305;
const kilometer = 1000;

let firstDistance = Number(prompt("first distance in km", ""));
let secondDistance = Number(prompt("second distance in foot"));

if (firstDistance * kilometer > secondDistance * foot) {
  alert(firstDistance + " km is bigger than " + secondDistance + " foot ");
} else {
  alert(firstDistance + " km is smaller than " + secondDistance + " foot ");
}
