var squares = document.querySelectorAll(".square");
var displayMessage = document.querySelector("#displayMessage");
var displayColor = document.querySelector("#displayColor");
var displayH1 = document.querySelector("h1");
var btnAgain = document.querySelector("#buttonAgain");
var modeButtons = document.querySelectorAll(".modeButton");
var colors = [];
var numColors = 6;
var won = false;

init();

function init(){
  genRandomColors();
  setupAgainButton();
  setupModeButtons();
  reset();
}

function setupAgainButton(){
    btnAgain.addEventListener("click", function(){
      reset();
    });
  }

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
      modeButtons[i].addEventListener("click", function(){
        if(!this.classList.contains("selected")){
          for(var i = 0; i < modeButtons.length; i++){
            modeButtons[i].classList.remove("selected");
          }
          this.classList.add("selected");
          if(this.textContent === "Easy"){
            numColors = 3;
          } else {
            numColors = 6;
          }
          reset();
        }
      });
    }
  }

function reset(){
  won = false;
  colors = [];
  genRandomColors();
  selectedColor = pickColor();
  assignBackgroundColor();
  setupSquares();
  if(numColors === 3){
    for(var i = 3; i < squares.length; i++){
        squares[i].style.display = "none";
    } 
    } else {
            for(var i = 0; i < squares.length; i++){
              squares[i].style.display = "inline-block";
            }
    }
  displayColor.textContent = selectedColor;
  displayH1.style.backgroundColor = "steelblue";
  displayMessage.textContent = "";
  btnAgain.textContent = "New Colors";
}

//func to get a random color
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//func to select a picked color
function pickColor() {
  var x = Math.floor(Math.random() * numColors);
  return colors[x];
}

//function to setup squares
function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function (){
      if(this.style.backgroundColor === selectedColor && !won){
          displayMessage.textContent = "Correct!";
          btnAgain.textContent = "Play Again";
          won = true;
          displayH1.style.backgroundColor = selectedColor;
            for(var i = 0; i < squares.length; i++){
              squares[i].style.backgroundColor = selectedColor;
            }
        }
        else if(!won) {
          displayMessage.textContent = "Try again!";
          this.style.backgroundColor = "#232323";
        }
      });
  }
}

//function to assign colors to square backgrouds
function assignBackgroundColor(){
   for(var i = 0; i < squares.length; i++){
     squares[i].style.backgroundColor = colors[i];
  }
}

//function to generate random colors in array
function genRandomColors(){
  for(var i = 0; i < numColors; i++){
    colors.push(randomColor());
    }
}


// var squares = document.querySelectorAll(".square");
// var displayMessage = document.querySelector("#displayMessage");
// var displayColor = document.querySelector("#displayColor");
// var displayH1 = document.querySelector("h1");
// var btnAgain = document.querySelector("#buttonAgain");
// var btnEasy = document.querySelector("#buttonEasy");
// var btnHard = document.querySelector("#buttonHard");
// var colors = [];
// var numColors = 6;
// var won = false;
// var setModeButtons = document.querySelectorAll(".modeButton");

// for(var i = 0; i < setModeButtons.length; i++){
//   setModeButtons[i].addEventListener("click", function(){
//     if(!this.classList.contains("selected")){
//       if(this.textContent === "Easy"){
//         numColors = 3;
//       } else{
//         numColors = 6;
//       }
//     }
//   });
// }
// //       numColors = 3;
// //       for(var i = 3; i < squares.length; i++){
// //           squares[i].style.display = "none";
// //       }
// //       this.classList.add("selected");
// //       btnHard.classList.remove("selected");
// //       Reset();
// //     }
// //   });
// // }

// //set up Easy button
// btnEasy.addEventListener("click", function(){
//   if(!this.classList.contains("selected")){
//     numColors = 3;
//     for(var i = 3; i < squares.length; i++){
//         squares[i].style.display = "none";
//       }
//     this.classList.add("selected");
//     btnHard.classList.remove("selected");
//     Reset();
//   }
// });

// //set up Hard button
// btnHard.addEventListener("click", function(){
//   if(!this.classList.contains("selected")){
//     numColors = 6;
//     for(var i = 3; i < squares.length; i++){
//         squares[i].style.display = "inline-block";
//       }
//     this.classList.add("selected");
//     btnEasy.classList.remove("selected");
//     Reset();
//   }
// });

// //fill array with random colors
// for(var i = 0; i < numColors; i++){
//   colors.push(randomColor());
// }

// //assign array random colors to squares
// for(var i = 0; i < squares.length; i++){
//   squares[i].style.backgroundColor = colors[i];
// }

// //assign picked color to variable
// var selectedColor = pickColor();
// displayColor.textContent = selectedColor;

// //set up Play Again button
// btnAgain.addEventListener("click", function(){
//   Reset();
// });


// //set up buttons for squares
// for(var i = 0; i < squares.length; i++){
//     squares[i].addEventListener("click", function (){
//       //player clicked correct color
//       if(this.style.backgroundColor === selectedColor && !won){
//           displayMessage.textContent = "Correct!";
//           won = true;
//           displayH1.style.backgroundColor = selectedColor;
//           btnAgain.textContent = "Play Again?";
//             for(var i = 0; i < squares.length; i++){
//               squares[i].style.backgroundColor = selectedColor;
//             }
//         }
//         //player clicked incorrect color
//         else if(!won) {
//           displayMessage.textContent = "Try again!";
//           this.style.backgroundColor = "#232323";
//         }
//       });
// }

// //func to select a picked color
// function pickColor() {
//   var x = Math.floor(Math.random() * numColors);
//   return colors[x];
// }

// //func to get a random color
// function randomColor() {
//   var r = Math.floor(Math.random() * 256);
//   var g = Math.floor(Math.random() * 256);
//   var b = Math.floor(Math.random() * 256);
//   return "rgb(" + r + ", " + g + ", " + b + ")";
// }

// //func to reset game
// function Reset(){
//   won = false;
//   colors = [];
//     for(var i = 0; i < numColors; i++){
//     colors.push(randomColor());
//     }
//   selectedColor = pickColor();
//     for(var i = 0; i < squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//     }
//   displayColor.textContent = selectedColor;
//   displayH1.style.backgroundColor = "steelblue";
//   displayMessage.textContent = "";
//   btnAgain.textContent = "New Colors";
// }