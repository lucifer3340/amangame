var buttoncolour = ["red", "blue", "green" , "yellow"];
var gamepattern = [];
var userclickedpattern = [];

var started = false;
var level = 0;


$(document).keypress(function() {
    if(!started) {
        $("#level-title").text("level " + level);
        nextsequence();
        started = true;
    }
});


$(".btn").click(function() {
    var userchosencolour = $(this).attr("id");
    userclickedpattern.push(userchosencolour);
   playsound(userchosencolour);
   animatepress(userchosencolour);
   checkanswer(userclickedpattern.length-1);
   
    

});

function checkanswer(currentlevel) {
    if (gamepattern[currentlevel] === userclickedpattern[currentlevel]) {
        console.log("success");

        if (userclickedpattern.length === gamepattern.length) {

            setTimeout(() => {
                nextsequence();
                
            }, 1000);
    }
    

    }
    else {
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
            
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
      
        startover();
      
    }
}

   function nextsequence() {

    userclickedpattern = [];

    level++;
    

     $("#level-title").text("level" + level);
        var randomnumber = Math.floor(Math.random() * 4);
       var randomchosencolour = buttoncolour[randomnumber];
       gamepattern.push(randomchosencolour);
       $("#" + randomchosencolour).fadeIn(100).fadeOut(100).fadeIn(100);
       playsound(randomchosencolour);
       animatepress(randomchosencolour);

       
        
   };

   function playsound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

};

function animatepress(currentcolour) {
    $("." + currentcolour).addClass("pressed");
    setTimeout(() => {
        $("." + currentcolour).removeClass("pressed");
        
    }, 100);
   
};


function startover() {
    level = 0;
    gamepattern = [];
    started = false;
  }




 

