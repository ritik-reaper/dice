var randomNumber1= Math.floor(Math.random() * 6) + 1 ;
var randomImage = "dice" + randomNumber1 + ".png";
var x = document.querySelectorAll("img")[0];
x.setAttribute("src", randomImage);
var randomNuber2 = Math.floor(Math.random() * 6 )+1;
var randomImage2 = "dice" + randomNuber2 + ".png";
var x2= document.querySelectorAll("img")[1];
x2.setAttribute("src", randomImage2);
if(randomNumber1>randomNuber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNuber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML="draw";
}