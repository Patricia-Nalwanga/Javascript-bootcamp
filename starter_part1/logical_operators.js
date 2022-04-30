// boolean variables
const hasDriversLicense = true; //A
let hasGoodVision = false; //B

hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah can drive");
} else {
  console.log("Someone else should drive");
}

// coding challenge 3
const dolphinsAverageScore = (96 + 108 + 89) / 3;
console.log(dolphinsAverageScore);

const koalasAverageScore = (88 + 91 + 110) / 3;
console.log(koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore) {
  console.log("Dolphins team is the winner");
} else if (dolphinsAverageScore === koalasAverageScore) {
  console.log("It's a draw");
} else if (koalasAverageScore > dolphinsAverageScore) {
  console.log("Koalas team is the winner");
}

// bonus 1
const dolphinScore = (97 + 112 + 101) / 3;
console.log(dolphinScore);

const koalasScore = (109 + 95 + 123) / 3;
console.log(koalasScore);

if (dolphinScore > koalasScore && dolphinScore >= 100) {
  console.log("....Dolphin is the winner");
} else if (koalasScore > dolphinScore && koalasScore >= 100) {
  console.log("....Koala is the winner");
} else if (koalasScore === dolphinScore) {
  console.log("it is a draw");
}
// bonus2
const dolphinMinScore = (97 + 112 + 101) / 3;
console.log(`Dolphin's minimum score is ${dolphinMinScore}.`);

const koalasMinScore = (109 + 95 + 106) / 3;
console.log(`Koala's minimimum score is ${koalasMinScore}. `);

if (
  dolphinMinScore === koalasMinScore &&
  dolphinMinScore >= 100 &&
  koalasMinScore >= 100
) {
  console.log("It is a draw");
} else {
  console.log("Noone takes the trophy home");
}
