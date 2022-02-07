$("document").ready(function(){
  var userClickedPattern = [];
  var buttonColors = ["red","blue","green","yellow"];
  var gamePattern=[];
  function nextSequence(){
    $("h1").text("Level "+count);
    var randomNumber = Math.random()*4;
    var randomNumber = Math.floor(randomNumber);
    //console.log(randomNumber);

    var randomChosenColor = buttonColors[randomNumber];
    //console.log("randomChosenColor "+randomChosenColor);

    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    //console.log("gamePattern.length "+gamePattern.length);
    //for(var i=0;i<gamePattern.length;i++){
    //console.log("gamePattern[i] before timeout function "+gamePattern[i]);
    // setTimeout(function(){
    //console.log("gamePattern[i] "+gamePattern[i]);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    var audioBlue = new Audio('sounds/blue.mp3');
    var audioGreen = new Audio('sounds/green.mp3');
    var audioRed = new Audio('sounds/red.mp3');
    var audioWrong = new Audio('sounds/wrong.mp3');
    var audioYellow= new Audio('sounds/yellow.mp3');

    if(randomChosenColor ==="blue")
      {audioBlue.play();}
    else if(randomChosenColor==="green")
      {audioGreen.play();}
    else if(randomChosenColor==="red")
      {audioRed.play();}
    else if(randomChosenColor==="yellow")
      {audioYellow.play();}

// },100)
// setTimeout(function(){
// console.log("it is a time out "+i);
// },1000)
userClickedPattern=[];
}
//}
$(".btn").click(function(){
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);


  $("#"+userChosenColor).fadeOut(100).fadeIn(100);
  var audioBlue = new Audio('sounds/blue.mp3');
  var audioGreen = new Audio('sounds/green.mp3');
  var audioRed = new Audio('sounds/red.mp3');
  var audioWrong = new Audio('sounds/wrong.mp3');
  var audioYellow= new Audio('sounds/yellow.mp3');

  if(userChosenColor ==="blue")
    {audioBlue.play();}
  else if(userChosenColor ==="green")
    {audioGreen.play();}
  else if(userChosenColor ==="red")
    {audioRed.play();}
  else if(userChosenColor ==="yellow")
    {audioYellow.play();}

    for(var j = 0;j<userClickedPattern.length;j++){
      if(userClickedPattern[j] !== gamePattern[j])
      {$("h1").text("Game Over, Press Any Key to Restart");
      //  j--;
        break;}
      }
      console.log(j);
      console.log(userClickedPattern.length);
      if(j===userClickedPattern.length)
        {
          if(j===gamePattern.length){
          setTimeout(function(){
          count++;
          console.log("calling nextSequence function");
          nextSequence();
  },1000)
}
}
if($("h1").text() === "Game Over, Press Any Key to Restart")
{
  $("body").addClass("game-over")
  var wrong = new Audio('sounds/wrong.mp3');
  wrong.play();
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200)
}
})


// function animatePress(){
  $(".btn").click(function(){
    $(this).addClass("pressed");
    setTimeout(function(){
      $(".pressed").removeClass("pressed");
    },100)
  })
//}
var count = 0;
$(document).keydown(function(){
  if($("h1").text() === "Game Over, Press Any Key to Restart")
  {
  count = 0;
  console.log(count);
  gamePattern = [];
  }
  count++;
  if(count===1){
  nextSequence();
}
})

})
