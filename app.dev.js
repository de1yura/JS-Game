"use strict";

var game = document.getElementById('game');
var board = document.querySelector('.chess');
var letters = document.querySelector('.letters');
var numbers = document.querySelector('.numbers'); //creating div elements inside html for the chess board pattern

for (var y = 0; y < 8; y++) {
  var row = document.createElement("div");
  row.classList.add("row");
  row.classList.add("row".concat(8 - y));

  if (y % 2 === 0) {
    row.style.flexDirection = 'row-reverse';
  }

  for (var x = 0; x < 8; x++) {
    if (x % 2 === 0) {
      var blackBox = document.createElement("div");
      blackBox.classList.add("black");
      blackBox.classList.add("box");
      row.appendChild(blackBox);
    } else {
      var whiteBox = document.createElement("div");
      whiteBox.classList.add("white");
      whiteBox.classList.add("box");
      row.appendChild(whiteBox);
    }
  }

  game.appendChild(row);
} //array of numbers and letters for the board


var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var number = [1, 2, 3, 4, 5, 6, 7, 8];
alphabet.forEach(function (alpha) {
  var letter = document.createElement("li");
  letter.textContent = alpha;
  letters.appendChild(letter);
});
number.forEach(function (sideNum) {
  var sideNumbers = document.createElement("li");
  sideNumbers.textContent = sideNum;
  numbers.appendChild(sideNumbers);
}); //adding id to each box from a1...h8
//making array of all a1-h8

var boxValues = [];

for (i = 1; i <= 8; i++) {
  alphaNum = alphabet.map(function (alpha) {
    return alpha + i;
  });
  boxValues.push(alphaNum);
}

var array2 = boxValues[1].reverse();
var array4 = boxValues[3].reverse();
var array6 = boxValues[5].reverse();
var array8 = boxValues[7].reverse();
console.log(array2);
var row1squares = document.querySelectorAll('.row1 .box');
var row2squares = document.querySelectorAll('.row2 .box');
var row3squares = document.querySelectorAll('.row3 .box');
var row4squares = document.querySelectorAll('.row4 .box');
var row5squares = document.querySelectorAll('.row5 .box');
var row6squares = document.querySelectorAll('.row6 .box');
var row7squares = document.querySelectorAll('.row7 .box');
var row8squares = document.querySelectorAll('.row8 .box');

for (i = 0; i < 8; i++) {
  row1squares[i].setAttribute('id', "".concat(boxValues[0][i]));
}

for (i = 0; i < 8; i++) {
  row2squares[i].setAttribute('id', "".concat(array2[i]));
}

for (i = 0; i < 8; i++) {
  row3squares[i].setAttribute('id', "".concat(boxValues[2][i]));
}

for (i = 0; i < 8; i++) {
  row4squares[i].setAttribute('id', "".concat(array4[i]));
}

for (i = 0; i < 8; i++) {
  row5squares[i].setAttribute('id', "".concat(boxValues[4][i]));
}

for (i = 0; i < 8; i++) {
  row6squares[i].setAttribute('id', "".concat(array6[i]));
}

for (i = 0; i < 8; i++) {
  row7squares[i].setAttribute('id', "".concat(boxValues[6][i]));
}

for (i = 0; i < 8; i++) {
  row8squares[i].setAttribute('id', "".concat(array8[i]));
} //Old Code:
// const divRow = () => {
//   const divR = document.createElement("div");
//   game.appendChild(divR);
//   divR.classList.add("row");
//   divR.style.flexDirection = i%2===0 ? '':'row-reverse';
// }
// const whiteBox = () => {
//   const whiteBox = document.createElement("div");
//   whiteBox.classList.add("white");
//   row.appendChild(whiteBox);
// }
// const bBox = () => {
//   const blackBox = document.createElement("div");
//   blackBox.classList.add("black");
//   row.appendChild(blackBox);
// }