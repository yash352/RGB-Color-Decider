var numOfSquares = 6;

var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedCOlor = colors[pickColor()];
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


colorDisplay.textContent = pickedCOlor;

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    document.querySelector("h1").style.background = "steelblue";
    message.textContent = "";
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedCOlor = colors[pickColor()];
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    document.querySelector("h1").style.background = "steelblue";
    message.textContent = "";
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedCOlor = colors[pickColor()];

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})


resetButton.addEventListener("click", function() {
    window.location.reload();
})


for (var i = 0; i < squares.length; i++) {
    // initial colors
    squares[i].style.background = colors[i];
    //listners
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;
        if (pickedCOlor == clickedColor) {
            changeColors(pickedCOlor);
            message.textContent = "You Win";
            document.querySelector("h1").style.background = pickedCOlor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.background = "#232323";
            message.textContent = "Try Again";
        }
    })
}


function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.background = pickedCOlor
    }
}


function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    console.log(random);
    return random;
}

function generateRandomColors(num) {
    var colrs = [];

    for (var i = 0; i < num; i++) {
        colrs.push(randomColor());
    }

    return colrs;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
