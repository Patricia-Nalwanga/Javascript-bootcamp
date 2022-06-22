"use strict";

// coding challenge

const printForecast = function (arr) {
  let day = 0;
let temp;
let thermometerReading = '';

  for(let i=0; i<arr.length; i++){
    temp = arr[i];
    day+=1;
    thermometerReading = thermometerReading + `...${temp} in ${day} days`;
     
    
  }
  console.log(thermometerReading);

};

printForecast([17, 21, 23]);
