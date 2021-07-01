"use strict";

var game = document.getElementById('game'); // const divRow = () => {
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

for (var y = 0; y < 8; y++) {
  var row = document.createElement("div");
  row.classList.add("row");

  if (y % 2 != 0) {
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
} // for (let index = 0; index < 64 ; index++) {
//     if (index%2!=0) {
//       whiteBox()
//     }
//     else {
//       blackBox()
//     }
//   }
// for (let index = 0; index < 64 ; index++) {
//   if (index%2!=0) {
//     whiteBox()
//   }
//   else {
//     blackBox()
//   }
//   if (index%8===0){
//     whiteBox();
//   }
// }