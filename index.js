var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = "./images/dice" + randomNumber1 + ".png";
var image2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", image1);
document.querySelector(".dice .img2").setAttribute("src", image2);

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML="Draw!";
}
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}