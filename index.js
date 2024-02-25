var randomNumber1 = (Math.random() * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
//to change the attributes of the elements.
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//Doing the same for second dice
var randomNumber2 = (Math.random() * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//to change the attributes of the elements.
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Player1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins ";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins ";
}
else {
    document.querySelector("h1").innerHTML = "Draw ";
}


