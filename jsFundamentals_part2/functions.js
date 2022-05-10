"use strict";

function logger() {
  console.log("My is name is Patricia");
}
logger();
logger();

// function declaration
/*function calcAge(currentyr, birthyr) {
  const age = currentyr - birthyr;
  return age;
}
const myAge = calcAge(2022, 2000);
console.log(`I am ${myAge} yrs old now.`);*/

/*// function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(2000);
console.log(age2);

//arrow functions
const calcAge3 = (birthyr) => 2022 - birthyr;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (firstName, birthyr) => {
  const age = 2022 - birthyr;
  const retirement = 65 - age;
  return `${firstName} retires in ${age} years.`;
};
console.log(yearsUntilRetirement("Cynthia", 2006));

// functions calling other functions*/

// coding challenge 1 part2
const calcAverage = (a, b, c) => {
  const averageScore = (a + b + c) / 3;
  return averageScore;
};

//calculating average score of both teams
let dolphinsAvscore = calcAverage(44, 23, 71);
let koalasAvscore = calcAverage(65, 54, 49);

// task 3
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win with ${avgDolphins}.`);
    return avgDolphins;
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins ${avgKoalas}`);
    return avgKoalas;
  } else {
    console.log("No team wins");
    return 0;
  }
};

//task 4
const winner = checkWinner(dolphinsAvscore, koalasAvscore);
console.log(winner);

// dolphinsAvscore = calcAverage(85, 54, 41);
// koalasAvscore = calcAverage(23, 34, 27);

// console.log(checkWinner(dolphinsAvscore, koalasAvscore));
