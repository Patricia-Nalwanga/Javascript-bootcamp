"use strict";

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// using a for loop to iterate through an array
const jonasArray = [
  "Jonas",
  "Ssendi",
  2022 - 2000,
  "teacher",
  ["Peter", "Jane", "Steven"],
  true,
];
console.log(jonasArray.length);

const types = [];
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);

  //   filling an array
  types.push(typeof jonasArray[i]);
  //   or types[i]=typeof jonasArray[i];
}

console.log(types);

// example 2

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

// continue and break
console.log("---ONLY STRINGS---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("---BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}
