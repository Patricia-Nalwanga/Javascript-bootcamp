"use strict";
// literal syntax
const profile = {
  firstName: "Patricia",
  lastName: "Nalwanga",
  age: 2022 - 2000,
  job: "software developer",
  friends: ["Peter", "Jane", "Steven"],
};
console.log(typeof profile);

/*retrieving data from an object
1.using dot notation*/
console.log(profile.friends);

//using bracket notation
console.log(profile["age"]);

const interestedIn = prompt(
  "What do you want to know about Nalwanga? Choose between job and friends"
);
console.log(interestedIn);

if (profile[interestedIn]) {
  console.log(profile[interestedIn]);
} else {
  console.log("Wrong choice! Please choose between job and friends");
}

const bestie = profile.friends;
console.log(
  `${profile.firstName} has ${profile.friends.length} friends, and her bestfriend is ${bestie[0]}`
);

// challenge
const jonas = {
  firstName: "Jonas",
  lastName: "Mubiru",
  birthYear: "2000",
  job: "teacher",
  friends: ["Cynthia", "Edward", "Brian"],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } and has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
  },
};

console.log(jonas.getSummary());

// coding challenge3 of part2
const johnSmith = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  //calcBMI method
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const markMiller = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  //calcBMI method
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(
  `${
    johnSmith.calcBMI() > markMiller.calcBMI()
      ? `John's BMI(${johnSmith.calcBMI()})is higher than Mark's(${markMiller.calcBMI()})`
      : `Mark's BMI(${markMiller.calcBMI()}) is higher than John's(${johnSmith.calcBMI()})`
  }`
);
