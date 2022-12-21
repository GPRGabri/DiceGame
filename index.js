document.querySelector("#playBtn").addEventListener("click", rollDice);



function rollDice(){
document.querySelector("#p1").classList.remove("winner");
document.querySelector("#p2").classList.remove("winner");

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 === randomNumber2){
document.querySelector("h1").innerHTML= "Draw!";
}

else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 Wins!";
    document.querySelector("#p1").classList.add("winner");
}

else {
    document.querySelector("h1").innerHTML= "Player 2 Wins!";
    document.querySelector("#p2").classList.add("winner");
}
}