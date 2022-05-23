// "use strict";
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
