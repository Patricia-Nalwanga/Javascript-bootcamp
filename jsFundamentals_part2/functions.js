"use strict";

function logger() {
  console.log("My is name is Patricia");
}
logger();
logger();

// function declaration
function calcAge(currentyr, birthyr) {
  const age = currentyr - birthyr;
  return age;
}
const myAge = calcAge(2022, 2000);
console.log(`I am ${myAge} yrs old now.`);

// function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(2000);
console.log(age2);
