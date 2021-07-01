"use strict";

var game = document.getElementById('game');

var divRow = function divRow() {
  var divR = document.createElement("div");
  game.appendChild(divR);
  divR.classList.add("row");
};

var Row = document.querySelectorAll(".row");

for (var i = 0; i < 8; i++) {
  divRow();
}

var whiteBox = function whiteBox() {
  var divW = document.createElement("div");
  game.appendChild(divW);
  divW.classList.add("white");
};

var blackBox = function blackBox() {
  var divB = document.createElement("div");
  game.appendChild(divB);
  divB.classList.add("black");
};

for (var index = 0; index < 8; index++) {
  if (index % 2 != 0) {
    whiteBox();
  } else {
    blackBox();
  }
}