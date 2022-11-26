

buttonColors = ["red", "blue", "green", 'yellow'];
gamePattern = [];


function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);


    $("#" + randomChosenColor).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200);
    // var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    // audio.play();

}


