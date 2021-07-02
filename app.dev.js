"use strict";

var game = document.getElementById('game');
var board = document.querySelector('.chess');
var letters = document.querySelector('.letters');
var numbers = document.querySelector('.numbers'); //creating div elements inside html for the chess board patter

for (var y = 0; y < 8; y++) {
  var row = document.createElement("div");
  row.classList.add("row");

  if (y % 2 === 0) {
    row.style.flexDirection = 'row-reverse';
  }

  for (var x = 0; x < 8; x++) {
    if (x % 2 === 0) {
      var blackBox = document.createElement("div");
      blackBox.classList.add("black");
      row.appendChild(blackBox);
    } else {
      var whiteBox = document.createElement("div");
      whiteBox.classList.add("white");
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
}); //Old Code:
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