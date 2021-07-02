const game = document.getElementById('game');
const board = document.querySelector('.chess');
const letters = document.querySelector('.letters');
const numbers = document.querySelector('.numbers');

//creating div elements inside html for the chess board pattern
for(let y=0; y<8; y++){
  const row = document.createElement("div");
  row.classList.add("row");
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

//adding id to each box

let boxValues=[];
for(i=1; i<=8; i++){
alphaNum = alphabet.map((alpha) => alpha+i);
boxValues.push(alphaNum);
}
//console.log(boxValues);

boxValues.map((boxValue)=> {
  array = boxValue;
})

console.log(array);









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