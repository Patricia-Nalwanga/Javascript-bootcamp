"use strict";

// coding challenge
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= arr.length; j++) {
      let day = j;
      const temps = `.....${arr[i]} in ${day} days`;
      console.log(temps);
      break;
    }
  }
};

printForecast([17, 21, 23]);
