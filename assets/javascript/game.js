/// Need to set up all your variables for game like score to reach wins, losses, playerscore, and random crystal numbers
///



$(document).ready(function() {
    var wins = 0;
var losses = 0;
var gameScore = (Math.floor(Math.random() * 130) + 22);
var crystalOne = Math.floor(Math.random() * 12) + 1
var crystalTwo = Math.floor(Math.random() * 12) + 1;
var crystalThree = Math.floor(Math.random() * 12) + 1;
var crystalFour = Math.floor(Math.random() * 12) + 1;
var playerScore = 0;

    $("#gameScore").text(gameScore);
    $('#crystalOne').data("value",crystalOne);
    $('#crystalTwo').data("value",crystalTwo);
    $('#crystalThree').data("value",crystalThree);
    $('#crystalFour').data("value",crystalFour);
    $(".crystal").click(function(event) {
        console.log($(event.target).data().value);

    var crystalValue = parseInt($(event.target).data().value);
    playerScore = playerScore + crystalValue;
    $("#playerScore").text(playerScore)
    $("#gameScore").text(gameScore)
    console.log(playerScore);
    if(playerScore === gameScore) {
        wins++
        console.log("you win");
    }
    else if (playerScore > gameScore) {
        losses++
        console.log("You suck");
    }
    })
    

})



