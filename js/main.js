/* Test connection to index.html
window.alert("Connected to index.html");
*/

/*global $, jStat*/

/*
var powerball = [
  {  "drawDate": "2017-04-26",  "WB1": 18,  "WB2": 1,   "WB3": 51,  "WB4": 15,  "WB5": 26,  "PB": 26,  "PP": 4  },
  {  "drawDate": "2017-04-22",  "WB1": 39,  "WB2": 21,  "WB3": 48,  "WB4": 41,  "WB5": 63,  "PB": 6,   "PP": 3  },
  {  "drawDate": "2017-04-19",  "WB1": 1,   "WB2": 19,  "WB3": 52,  "WB4": 40,  "WB5": 37,  "PB": 15,  "PP": 3  },
  {  "drawDate": "2017-04-15",  "WB1": 61,  "WB2": 26,  "WB3": 45,  "WB4": 5,   "WB5": 22,  "PB": 13,  "PP": 3  },
  {  "drawDate": "2017-04-12",  "WB1": 68,  "WB2": 63,  "WB3": 14,  "WB4": 8,   "WB5": 61,  "PB": 24,  "PP": 2  },
  {  "drawDate": "2017-04-08",  "WB1": 51,  "WB2": 53,  "WB3": 36,  "WB4": 23,  "WB5": 60,  "PB": 15,  "PP": 2  },
  {  "drawDate": "2017-04-05",  "WB1": 53,  "WB2": 20,  "WB3": 54,  "WB4": 46,  "WB5": 8,   "PB": 13,  "PP": 2  },
  {  "drawDate": "2017-04-01",  "WB1": 65,  "WB2": 9,   "WB3": 44,  "WB4": 36,  "WB5": 32,  "PB": 1,   "PP": 3  },
  {  "drawDate": "2017-03-29",  "WB1": 8,   "WB2": 62,  "WB3": 31,  "WB4": 36,  "WB5": 15,  "PB": 11,  "PP": 3  }
];
*/
var index;

/* |||||||||||||||||||||||||||||||||||||||||||||||| EXAMPLE */
var exampleHistogram;

exampleHistogram = jStat.histogram([100, 101, 102, 230, 304, 305, 400], 3);
/* |||||||||||||||||||||||||||||||||||||||||||||||| EXAMPLE */


/* |||||||||||||||||||||||||||||||||||||||||||||||| POWERBALL */
var POWERBALL_WB_MAX = 69, POWERBALL_PB_MAX = 26;

var powerballHistogramWB, powerballHistogramPB, powerballArrayWB, powerballArrayPB;

powerballArrayWB = [];

for (index = 0; index < powerball1.length; index += 1) {
  powerballArrayWB.push(powerball1[index].WB1);
  powerballArrayWB.push(powerball1[index].WB2);
  powerballArrayWB.push(powerball1[index].WB3);
  powerballArrayWB.push(powerball1[index].WB4);
  powerballArrayWB.push(powerball1[index].WB5);
}

powerballHistogramWB = jStat.histogram(powerballArrayWB, POWERBALL_WB_MAX);

powerballArrayPB = [];

for (index = 0; index < powerball1.length; index += 1) {
  powerballArrayPB.push(powerball1[index].PB);
}

powerballHistogramPB = jStat.histogram(powerballArrayPB, POWERBALL_PB_MAX);
/* |||||||||||||||||||||||||||||||||||||||||||||||| POWERBALL */

/* |||||||||||||||||||||||||||||||||||||||||||||||| MEGAMILLIONS */
var MEGAMILLONS_WB_MAX = 75, MEGAMILLIONS_MB_MAX = 15;

var megamillionsHistogramWB, megamillionsHistogramMB, megamillionsArrayWB, megamillionsArrayMB;

megamillionsArrayWB = [];

for (index = 0; index < megamillions1[0].numbersList.length; index += 1) {
  megamillionsArrayWB.push(megamillions1[0].numbersList[index].WhiteBall1);
  megamillionsArrayWB.push(megamillions1[0].numbersList[index].WhiteBall2);
  megamillionsArrayWB.push(megamillions1[0].numbersList[index].WhiteBall3);
  megamillionsArrayWB.push(megamillions1[0].numbersList[index].WhiteBall4);
  megamillionsArrayWB.push(megamillions1[0].numbersList[index].WhiteBall5);
}

megamillionsHistogramWB = jStat.histogram(megamillionsArrayWB, MEGAMILLONS_WB_MAX);

megamillionsArrayMB = [];

for (index = 0; index < megamillions1[0].numbersList.length; index += 1) {
  megamillionsArrayMB.push(megamillions1[0].numbersList[index].MegaBall);
}

megamillionsHistogramMB = jStat.histogram(megamillionsArrayMB, MEGAMILLIONS_MB_MAX);
/* |||||||||||||||||||||||||||||||||||||||||||||||| MEGAMILLIONS */