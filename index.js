 //DICE NUMBER ONE
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png";  // randomimages1-6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

//DICE NUMBER TWO

var randomNumber2 = Math.floor(Math.random() * 6) + 1;  //1-6

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";  // randomimages1-6

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

//if player one wins

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player One Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player Two Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}







