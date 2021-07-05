"use strict";

var _pieces = require("./pieces.js");

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

var _loop = function _loop(i) {
  var alphaNum = alphabet.map(function (alpha) {
    return alpha + i;
  });
  boxValues.push(alphaNum);
};

for (var i = 1; i <= 8; i++) {
  _loop(i);
} //inversing the array for the rows that are flex-row-reversed


var array2 = boxValues[1].reverse();
var array4 = boxValues[3].reverse();
var array6 = boxValues[5].reverse();
var array8 = boxValues[7].reverse(); //assigning the squares their id

var row1squares = document.querySelectorAll('.row1 .box');
var row2squares = document.querySelectorAll('.row2 .box');
var row3squares = document.querySelectorAll('.row3 .box');
var row4squares = document.querySelectorAll('.row4 .box');
var row5squares = document.querySelectorAll('.row5 .box');
var row6squares = document.querySelectorAll('.row6 .box');
var row7squares = document.querySelectorAll('.row7 .box');
var row8squares = document.querySelectorAll('.row8 .box');

for (var _i = 0; _i < 8; _i++) {
  row1squares[_i].setAttribute('id', "".concat(boxValues[0][_i]));
}

for (var _i2 = 0; _i2 < 8; _i2++) {
  row2squares[_i2].setAttribute('id', "".concat(array2[_i2]));
}

for (var _i3 = 0; _i3 < 8; _i3++) {
  row3squares[_i3].setAttribute('id', "".concat(boxValues[2][_i3]));
}

for (var _i4 = 0; _i4 < 8; _i4++) {
  row4squares[_i4].setAttribute('id', "".concat(array4[_i4]));
}

for (var _i5 = 0; _i5 < 8; _i5++) {
  row5squares[_i5].setAttribute('id', "".concat(boxValues[4][_i5]));
}

for (var _i6 = 0; _i6 < 8; _i6++) {
  row6squares[_i6].setAttribute('id', "".concat(array6[_i6]));
}

for (var _i7 = 0; _i7 < 8; _i7++) {
  row7squares[_i7].setAttribute('id', "".concat(boxValues[6][_i7]));
}

for (var _i8 = 0; _i8 < 8; _i8++) {
  row8squares[_i8].setAttribute('id', "".concat(array8[_i8]));
}

var piecesPosition = Object.keys(_pieces.piecesStartPos);
var piecesInPosition = Object.values(_pieces.piecesStartPos);

for (var _i9 = 0; _i9 < piecesPosition.length; _i9++) {
  var imgPiece = document.createElement('img');
  var pieceToImg = _pieces.piecesImg[piecesInPosition[_i9]];
  imgPiece.setAttribute("src", pieceToImg);
  document.getElementById(piecesPosition[_i9]).style.backgroundImage = "url('".concat(pieceToImg, "')");
} //move pieces on click
//get id of square clicked


var square = document.querySelectorAll('.box');
var first_click = "";
var hasClicked = false;

var firstClick = function firstClick(event) {
  first_click = event.target.style.backgroundImage;
  hasClicked = true;
  console.log('first click');
};

var secondClick = function secondClick(e) {
  e.target.style.backgroundImage = first_click;
  first_click = "";
  hasClicked = false;
  console.log('second click');
};

square.forEach(function (sq) {
  sq.addEventListener("click", function (event) {
    if (hasClicked) {
      secondClick(event);
    } else {
      firstClick(event);
    }
  });
}); // square.forEach(sq => { 
//  sq.addEventListener('click', secondClick)
// })
//Old Code:
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
// const white_pawn = document.createElement("img");
// white_pawn.setAttribute("src", "./images/Chess_plt60.png");
// document.getElementById('a2').appendChild(white_pawn);
//const piecesTypes= Object.keys(piecesImg);
//const piecesImages =  Object.values(piecesImg);