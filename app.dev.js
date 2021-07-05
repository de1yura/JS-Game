"use strict";

//import { piecesImg } from "./pieces"
//import { piecesPos } from "./pieces";
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
} //importing the pieces into the board


var piecesImg = {
  'w_pawn': "./images/Chess_plt60.png",
  'w_rook': "./images/Chess_rlt60.png",
  'w_knight': "./images/Chess_nlt60.png",
  'w_bishop': "./images/Chess_blt60.png",
  'w_queen': "./images/Chess_qlt60.png",
  'w_king': "./images/Chess_klt60.png",
  'b_pawn': "./images/Chess_pdt60.png",
  'b_rook': "./images/Chess_rdt60.png",
  'b_knight': "./images/Chess_ndt60.png",
  'b_bishop': "./images/Chess_bdt60.png",
  'b_queen': "./images/Chess_qdt60.png",
  'b_king': "./images/Chess_kdt60.png"
};
var piecesStartPos = {
  'a2': 'w_pawn',
  'b2': 'w_pawn',
  'c2': 'w_pawn',
  'd2': 'w_pawn',
  'e2': 'w_pawn',
  'f2': 'w_pawn',
  'g2': 'w_pawn',
  'h2': 'w_pawn',
  'a1': 'w_rook',
  'b1': 'w_knight',
  'c1': 'w_bishop',
  'd1': 'w_queen',
  'e1': 'w_king',
  'f1': 'w_bishop',
  'g1': 'w_knight',
  'h1': 'w_rook',
  'a7': 'b_pawn',
  'b7': 'b_pawn',
  'c7': 'b_pawn',
  'd7': 'b_pawn',
  'e7': 'b_pawn',
  'f7': 'b_pawn',
  'g7': 'b_pawn',
  'h7': 'b_pawn',
  'a8': 'b_rook',
  'b8': 'b_knight',
  'c8': 'b_bishop',
  'd8': 'b_queen',
  'e8': 'b_king',
  'f8': 'b_bishop',
  'g8': 'b_knight',
  'h8': 'b_rook'
};
var piecesPosition = Object.keys(piecesStartPos);
var piecesInPosition = Object.values(piecesStartPos);

for (i = 0; i < piecesPosition.length; i++) {
  var imgPiece = document.createElement('img');
  var pieceToImg = piecesImg[piecesInPosition[i]];
  imgPiece.setAttribute("src", pieceToImg);
  document.getElementById(piecesPosition[i]).style.backgroundImage = "url('".concat(pieceToImg, "')");
} //move pieces on click
//get id of square clicked


var square = document.querySelectorAll('.box');
var first_click = "";
var hasClicked = false;

var secondClick = function secondClick(e) {
  if (first_click != "" && hasClicked) {
    e.target.style.backgroundImage = first_click;
    console.log(e.target.style);
  }
};

square.forEach(function (sq) {
  sq.addEventListener('click', secondClick);
});

var firstClick = function firstClick(e) {
  if (first_click === "") {
    first_click = e.target.style.backgroundImage;
    hasClicked = true;
    console.log(first_click);
  }
};

square.forEach(function (sq) {
  sq.addEventListener('click', firstClick);
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
// const white_pawn = document.createElement("img");
// white_pawn.setAttribute("src", "./images/Chess_plt60.png");
// document.getElementById('a2').appendChild(white_pawn);
//const piecesTypes= Object.keys(piecesImg);
//const piecesImages =  Object.values(piecesImg);