var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colordisplay");
var msgDisplay = document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    //mode buttons
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        });
    }
}

function setUpSquares(){
    for(var i=0;i<squares.length;i++){
        //add click listeners to squares
        squares[i].addEventListener("click" ,function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if (clickedColor === pickedColor){
                msgDisplay.textContent="Correct !";
                resetButton.textContent="PlayAgain ?";
                changeColors(clickedColor);
                h1.style.backgroundColor=clickedColor;
            }
            else {
                this.style.background = "#232323";
                msgDisplay.textContent="Try Again !";
            }
        });
    }

}

function reset(){
        //generate all new colors
        colors=generateRandomColors(numOfSquares);
        //pick a new random color from array
        pickedColor =  pickColor();
        //change colorDisplay to match picked color
        colorDisplay.textContent = pickedColor;
        resetButton.textContent="New Colors";
        //change colors of squares
        msgDisplay.textContent="";
        for(var i=0;i<squares.length;i++){
            if(colors[i]){
                squares[i].style.display = "block" ;
                squares[i].style.backgroundColor=colors[i];
            }
            else{
                squares[i].style.display = "none" ;
            }   
        }     
        h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
   reset();
});

function changeColors(color){
    //loop through all squares
    for(var i=0;i<squares.length;i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }

}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   //console.log(random);
   return(colors[random]);
}

function generateRandomColors(num){
    //make an array
    var arr=[];
    //add num random colors to array
    for(var i=0;i<num;i++){
        //get random color and push to array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b + ")";
}