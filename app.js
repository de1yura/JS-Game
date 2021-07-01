const game = document.getElementById('game');

const divRow = () => {
  const divR = document.createElement("div");
  game.appendChild(divR);
  divR.classList.add("row");
}

const Row = document.querySelectorAll(".row");

for(let i=0; i<8; i++){
  divRow();
}

const whiteBox = () => {
  const divW = document.createElement("div");
  game.appendChild(divW);
  divW.classList.add("white");
}
const blackBox = () => {
  const divB = document.createElement("div");
  game.appendChild(divB);
  divB.classList.add("black");
}

for (let index = 0; index < 8; index++) {
  if (index%2!=0) {
    whiteBox()
  }
  else {
    blackBox()
  }
}


