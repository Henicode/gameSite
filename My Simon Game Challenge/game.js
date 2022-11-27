var buttonColours = ["red","blue","yellow","green"];         // 2nd step, inst 3






function nextSequence() {                           //  2nd step, inst 1 //
    var randomNumber = Math.floor(Math.random() * 4)       // 2nd step, inst 2    
    var randomChosenColour = buttonColours[randomNumber];       // 2nd step, inst 4
    gamePattern.push[randomChosenColour];        //2nd step, inst 6
    var gamePattern = [];                         //2nd step, inst 5
    

    $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200);       // 3rd step, inst    
    
}