var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //mode buttons event listeners
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //if = easy, then numsquares = 3, otherwise = 6
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of picked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        //picked wrong color
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //reset button text
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  //reset h1 background
  h1.style.backgroundColor = "steelBlue";
}


// easyBtn.addEventListener("click", function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     } else {
//       //hides the bottom 3 squares
//       squares[i].style.display = "none"; 
//     }
//   }
// });

// hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block"; 
//   }
// });

resetButton.addEventListener("click", function(){
  // //generate all new colors
  // colors = generateRandomColors(numSquares);
  // //pick a new random color from array
  // pickedColor = pickColor();
  // //change colorDisplay to match picked color
  // colorDisplay.textContent = pickedColor;
  // //reset button text
  // resetButton.textContent = "New Colors";
  // messageDisplay.textContent = "";
  // //change colors of squares
  // for(var i = 0; i < squares.length; i++){
  //   squares[i].style.background = colors[i];
  // }
  // //reset h1 background
  // h1.style.backgroundColor = "steelBlue";
  reset();
});

function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
  //change each color to match given color
  squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  //pick a random number to pick which color to choose in the colors array
  var random = Math.floor(Math.random() * colors.length)//Math.random picks a number between 0 and 1, not including 1
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors to arr
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256)
  //pick a green from 0-255
  var g = Math.floor(Math.random() * 256)
  //pick a blue from 0-255
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}