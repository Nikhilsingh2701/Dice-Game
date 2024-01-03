var randomNumber1=Math.floor((Math.random()*6)+1);

var randomDiceImage="dice"+randomNumber1+".png";

var finalRandomImage = "./images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",finalRandomImage);

var randomNumber2=Math.floor((Math.random()*6)+1);

var randomDiceImage2="dice"+randomNumber2+".png";

var finalRandomImage2= "./images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", finalRandomImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 wins🚩";
}else{
    document.querySelector("h1").textContent="🚩Its a Tie🚩";
}