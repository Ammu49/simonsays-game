// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "green", "red", "purple"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function() {
//     if (started == false) {
//     console.log("Game Started");
//     started = true;
//     levelup();
//     }
// });

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout (function () {
//         btn.classList.remove("flash");
//     }, 650);
// }

// function userFlash(btn) {
//     btn.classList.add("userflash");
//     setTimeout (function () {
//         btn.classList.remove("userflash");
//     }, 550);
// }

// function levelup() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;
    
//     let randIdx = Math.floor(Math.random() * 3);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns(idx) {

//     if (userSeq[idx] === gameSeq[idx]) {
//         if (userSeq.length == gameSeq.length){
//             levelup();
//         setTimeout(levelup, 1000);
//         }
//     }  else {
//         h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start`;
//         document.querySelector("body").style.backgroundColor = "red" ;
//         setTimeout(function () {
//             document.querySelector("body").style.backgroundColor = "white" ;
//         }, 105);

//         reset();
//     }
// }

// function btnPress() {
//     console.log(this);
//     let btn = this;
//     userFlash(btn);
    

//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);

//     checkAns(userSeq.length - 1);
// }

// let allBtns = document.querySelectorAll(".btn")
// for (btn of allBtns ) {
//     btn.addEventListener("click", btnPress);
// }

// function reset() {
//      gameSeq = [];
//      userSeq = [];
//      started = false;
//      level = 0;
// }




// let gameSeq = [];
// let userSeq = [];
// let btns = ["yellow", "green", "red", "purple"];

// let started = false;
// let level = 0;
// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//     if (started == false) {
//         console.log("game started");
//         started = true;
//         levelup();
//     }
// });

// function btnFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function userFlash(btn) {
//     btn.classList.add("userflash");
//     setTimeout(function () {
//         btn.classList.remove("userflash");
//     }, 550);
// }

// function levelup() {
//     // Reset user sequence for the new level
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     // Generate the next color for the game sequence
//     let randIdx = Math.floor(Math.random() * 4);
//     let randColor = btns[randIdx];
//     gameSeq.push(randColor);  // Add to game sequence

//     // Flash each button in sequence
//     let delay = 500;  // Delay between flashes
//     gameSeq.forEach((color, index) => {
//         setTimeout(() => {
//             let btn = document.querySelector(`.${color}`);
//             btnFlash(btn);
//         }, delay * (index + 1));  // Add delay for each button flash
//     });
// }

// function checkUserInput(currentLevel) {
//     if (userSeq[currentLevel] === gameSeq[currentLevel]) {
//         // Check if user finished the sequence
//         if (userSeq.length === gameSeq.length) {
//             setTimeout(levelup, 1000);  // Go to the next level after a short delay
//         }
//     } else {
//         h2.innerText = "Game Over! Press any key to restart.";
//         resetGame();
//     }
// }

// function resetGame() {
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
//     started = false;
// }

// function btnPress() {
//     let btn = this;
//     let btnColor = btn.classList[1];  // Get the color class of the button (e.g., "red", "yellow")
//     userSeq.push(btnColor);  // Add the pressed color to the user sequence
//     userFlash(btn);  // Flash the button green

//     // Check if the user input is correct
//     checkUserInput(userSeq.length - 1);
// }

// let allBtns = document.querySelectorAll(".btn");
// allBtns.forEach((btn) => {
//     btn.addEventListener("click", btnPress);
// })




let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let highest = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});


function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}


function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}


function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
            if (highest <= level) {
                highest = level;
            }

    h2.innerHTML = `Game Over! Your score was <b>${level}<b> <br>Press any key to start <br><br> Highest score is ${highest} `;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 1500);
    reset();
  }
}
function btnPress() {
  console.log(this);
  let btn = this;
  userflash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}


function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}