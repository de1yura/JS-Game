const game = document.getElementById('game');
const board = document.querySelector('.chess');
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
let alphabet = ['a','b','c','d','e','f','g','h'];
let number = [1,2,3,4,5,6,7,8];

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
for(i=1; i<=8; i++){
alphaNum = alphabet.map((alpha) => alpha+i);
boxValues.push(alphaNum);
}

const array2 = boxValues[1].reverse();
const array4 = boxValues[3].reverse();
const array6 = boxValues[5].reverse();
const array8 = boxValues[7].reverse();
console.log(array2);



const row1squares = document.querySelectorAll('.row1 .box');
const row2squares = document.querySelectorAll('.row2 .box');
const row3squares = document.querySelectorAll('.row3 .box');
const row4squares = document.querySelectorAll('.row4 .box');
const row5squares = document.querySelectorAll('.row5 .box');
const row6squares = document.querySelectorAll('.row6 .box');
const row7squares = document.querySelectorAll('.row7 .box');
const row8squares = document.querySelectorAll('.row8 .box');

for(i=0;i<8;i++){
  row1squares[i].setAttribute('id',`${boxValues[0][i]}`)
}
for(i=0;i<8;i++){
  row2squares[i].setAttribute('id',`${array2[i]}`)
}
for(i=0;i<8;i++){
  row3squares[i].setAttribute('id',`${boxValues[2][i]}`)
}
for(i=0;i<8;i++){
  row4squares[i].setAttribute('id',`${array4[i]}`)
}
for(i=0;i<8;i++){
  row5squares[i].setAttribute('id',`${boxValues[4][i]}`)
}
for(i=0;i<8;i++){
  row6squares[i].setAttribute('id',`${array6[i]}`)
}
for(i=0;i<8;i++){
  row7squares[i].setAttribute('id',`${boxValues[6][i]}`)
}
for(i=0;i<8;i++){
  row8squares[i].setAttribute('id',`${array8[i]}`)
}













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