var randomNumber1 = Math.floor(Math.random()*6+1); // it gives random no. b/w 1-6
var randomDiceImage = "images/dice" + randomNumber1 +".png"; //it selects the dice image
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage); // changing src value to randomDiceImage value


//for the 2nd dice

var randomNumber2 = Math.floor(Math.random()*6+1);
var randomDiceImage2 = "images/dice" + randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);4

//for checking who wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🤩player 1 Wins";
}
else 
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "🤩palyer 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}