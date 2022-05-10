// declaring an array
const friends = ["Micheal", "Patricia", "Cynthia"]; //literal syntax
console.log(friends);

// another way of declaring an array
const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

//accessing elements in an array
console.log(friends[1]);
console.log(y[3]);

// changing an element in an array
friends[0] = "Leticia";
console.log(friends);

//exercise on array
const calcAge = function (birthyr) {
  return 2022 - birthyr;
};
const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years)); this is wrong

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3, calcAge(years[2])];
console.log(ages);

// array methods
// add elements
const months = ["May", "April", "October", "July"];
months.push("June");
console.log(months);

months.unshift("January");
console.log(months);

// remove elements
months.pop();
console.log(months);

months.shift();
console.log(months);

// coding challenge 2 of part2
// task 1
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = 0.15 * bill;
    console.log(tip);
    return tip;
  } else {
    const tip = 0.2 * bill;
    console.log(tip);
    return tip;
  }
};
calcTip(100);
