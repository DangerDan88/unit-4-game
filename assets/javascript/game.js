


$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var gameScore = (Math.floor(Math.random() * 130 - 22) + 22);
    var crystalOne = Math.floor(Math.random() * 12) + 1
    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    var crystalThree = Math.floor(Math.random() * 12) + 1;
    var crystalFour = Math.floor(Math.random() * 12) + 1;
    var playerScore = 0;

    $("#gameScore").text(gameScore);
    $('#crystalOne').data("value", crystalOne);
    $('#crystalTwo').data("value", crystalTwo);
    $('#crystalThree').data("value", crystalThree);
    $('#crystalFour').data("value", crystalFour);
    $(".crystal").click(function (event) {
        console.log($(event.target).data().value);

        var crystalValue = parseInt($(event.target).data().value);
        playerScore = playerScore + crystalValue;
        $("#playerScore").text(playerScore)
        $("#gameScore").text(gameScore)

        console.log(playerScore);
        if (playerScore === gameScore) {
            wins++
            alert("you win refresh to play again until I figure out a reset lol");
            
        }
        else if (playerScore > gameScore) {
            losses++
            alert("You suck refresh to play again until I figure out a reset lol");

        }
    })


})



