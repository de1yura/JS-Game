import { piecesImg, piecesStartPos } from "./pieces.js";

const game = document.getElementById('game');
const letters = document.querySelector('.letters');
const numbers = document.querySelector('.numbers');

//creating div elements inside html for the chess board pattern
for(let y=0; y<8; y++){
  const row = document.createElement("div");
  row.classList.add("row");
  row.classList.add(`row${8-y}`);
  if (y%2===0) {
    row.style.flexDirection='row-reverse';
  }
  for (let x= 0; x < 8; x++) {
    if (x%2===0) {
    const blackBox = document.createElement("div");
    blackBox.classList.add("black");
    blackBox.classList.add("box");
    row.appendChild(blackBox);
    }
    else{
      const whiteBox = document.createElement("div");
      whiteBox.classList.add("white");
      whiteBox.classList.add("box");
      row.appendChild(whiteBox);
    }
  }
  game.appendChild(row);
}


//array of numbers and letters for the board
const alphabet = ['a','b','c','d','e','f','g','h'];
const number = [1,2,3,4,5,6,7,8];

alphabet.forEach((alpha) => {
  let letter = document.createElement("li");
  letter.textContent = alpha;
  letters.appendChild(letter);
})

number.forEach((sideNum) => {
  let sideNumbers = document.createElement("li");
  sideNumbers.textContent=sideNum;
  numbers.appendChild(sideNumbers);
})

//adding id to each box from a1...h8
//making array of all a1-h8
let boxValues=[];
for(let i=1; i<=8; i++){
let alphaNum = alphabet.map((alpha) => alpha+i);
boxValues.push(alphaNum);
}


//inversing the array for the rows that are flex-row-reversed
const array2 = boxValues[1].reverse();
const array4 = boxValues[3].reverse();
const array6 = boxValues[5].reverse();
const array8 = boxValues[7].reverse();

//assigning the squares their id
const row1squares = document.querySelectorAll('.row1 .box');
const row2squares = document.querySelectorAll('.row2 .box');
const row3squares = document.querySelectorAll('.row3 .box');
const row4squares = document.querySelectorAll('.row4 .box');
const row5squares = document.querySelectorAll('.row5 .box');
const row6squares = document.querySelectorAll('.row6 .box');
const row7squares = document.querySelectorAll('.row7 .box');
const row8squares = document.querySelectorAll('.row8 .box');

for(let i=0;i<8;i++){
  row1squares[i].setAttribute('id',`${boxValues[0][i]}`)
}
for(let i=0;i<8;i++){
  row2squares[i].setAttribute('id',`${array2[i]}`)
}
for(let i=0;i<8;i++){
  row3squares[i].setAttribute('id',`${boxValues[2][i]}`)
}
for(let i=0;i<8;i++){
  row4squares[i].setAttribute('id',`${array4[i]}`)
}
for(let i=0;i<8;i++){
  row5squares[i].setAttribute('id',`${boxValues[4][i]}`)
}
for(let i=0;i<8;i++){
  row6squares[i].setAttribute('id',`${array6[i]}`)
}
for(let i=0;i<8;i++){
  row7squares[i].setAttribute('id',`${boxValues[6][i]}`)
}
for(let i=0;i<8;i++){
  row8squares[i].setAttribute('id',`${array8[i]}`)
}

const piecesPosition = Object.keys(piecesStartPos);
const piecesInPosition = Object.values(piecesStartPos);


const setup =()=> {
  for(let i=0;i<piecesPosition.length; i++){
    const imgPiece = document.createElement('img');
    const pieceToImg = piecesImg[piecesInPosition[i]];
    imgPiece.setAttribute("src", pieceToImg);
    document.getElementById(piecesPosition[i]).style.backgroundImage= `url('${pieceToImg}')`
  }
}
setup()

//move pieces on click
//get id of square clicked
const square = document.querySelectorAll('.box');

let first_click = "";
let hasClicked =false;


const firstClick = (event) => {
  first_click = event.target.style.backgroundImage;
  hasClicked=true
  console.log('first click'); 
  clearPiece(event)
}

const secondClick = (event) => {
  event.target.style.backgroundImage=first_click;
  first_click="";
  hasClicked=false;
  console.log('second click')
 }

const clearPiece = (event) => {
  if (secondClick) {
    event.target.style.backgroundImage =""
  }
}

 square.forEach(sq => {
    sq.addEventListener("click", (event) => {
      if (hasClicked) {
        secondClick(event)
      } else {
        firstClick(event)
      }
    })
  })
 
//restart board
 const button = document.querySelector('.restart');

 button.addEventListener('click', setup);








 

//Old Code:
//const board = document.querySelector('.chess');

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
