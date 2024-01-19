let result = document.querySelector('#result');
let Boxes = document.querySelectorAll('.box');
let messageBox = document.querySelector('#message');
let playAgainBtn = document.getElementById("button");

let possibleOutputs = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

for (button of Boxes) {
  button.addEventListener('click', chances);
}
let hasPlayerWonOrNot = false;
let xClicks = [];
let oClicks = [];

let clickedCount = 0;
function chances(event) {
  let Id = Number(event.target.id);

  clickedCount = clickedCount + 1;

  let EachBoxToAppendment = Boxes[Id - 1];

  let pTag = document.createElement('p');
  pTag.style.color = '#FAB201';
  EachBoxToAppendment.appendChild(pTag);
  EachBoxToAppendment.style.pointerEvents = 'none';

  if(clickedCount % 2 == 0){
    pTag.innerText = 'X';
    xClicks.push(Id);
    Result('X', xClicks);
  }else {
    pTag.innerText = 'O';
    oClicks.push(Id);
    Result('O', oClicks);
  }

  if (clickedCount == 9 && hasPlayerWonOrNot == false) {
    result.style.visibility = 'visible';
    messageBox.innerText = 'Match is draw';
  }
}

function Result(PlayerPlaying, PlayersArray) {
  for (let i = 0; i < 8; i++) {
    let count = 0;

    for (let j = 0; j < 3; j++) {
      if (PlayersArray.includes(possibleOutputs[i][j]) === true) {
        count = count + 1;
      }
    }

    if (count == 3) {
      hasPlayerWonOrNot = true;
      result.style.visibility = 'visible';
      messageBox.innerText = `'${PlayerPlaying}'` + ' Won the Game!';
    }
  }
}
playAgainBtn.addEventListener("click",function(){
    window.location.reload();
  })