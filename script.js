"use strict";
$(document).ready(function() {

  var audioy  = new Audio("media/audio_yeti.mp3" );
  var audiop  = new Audio("media/audio_peng.mp3" );


    var shuffle = function() {
        var parent = $("#shuffle");
        var divs = parent.children();
        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    }
   
    shuffle();
    var highScore = 0;
    var score = 0;
    var addScore = function() {
        score += 1;
        if (score > highScore) {
            highScore = score;
        }

        $("#score").html("Highest : " + highScore + " Current : " + score);
    };

    //This code will run after your page load
    $("#yeti").click(function() {
        $("#yeti").css('background-image', 'url("images/yeti.png")');
        
        audioy.play();
        alert(" GAME OVER  " + "Highest : " + highScore + " Current : " + score);

        resetGame();
        shuffle();
    })


    var resetGame = function() {
        score = 0;
        $("#penguin1").removeAttr("style");
        $("#penguin2").removeAttr("style");
        $("#penguin3").removeAttr("style");
        $("#penguin4").removeAttr("style");
        $("#penguin5").removeAttr("style");
        $("#penguin6").removeAttr("style");
        $("#penguin7").removeAttr("style");
        $("#penguin8").removeAttr("style");
        $("#yeti").removeAttr("style");
        $("#score").html("Highest : " + highScore + " Current : " + score);
    }
      

    
    $("#penguin1").click(function() {
        audiop.play();
        $(this).css('background-image', 'url(images/penguin_1.png)');
        addScore();
       

    });

    $("#penguin2").click(function() {
        audiop.play()
        $(this).css('background-image', 'url(images/penguin_2.png)');
        addScore();
    });

    $("#penguin3").click(function() {
        audiop.play()
        $(this).css('background-image', 'url(images/penguin_3.png)');
        addScore();
    });

    $("#penguin4").click(function() {
        audiop.play()
        $(this).css('background-image', 'url(images/penguin_4.png)');
        addScore();
    });

    $("#penguin5").click(function() {
        audiop.play()
        $(this).css('background-image', 'url(images/penguin_5.png)');
        addScore();

    });
    $("#penguin6").click(function() {
        audiop.play()
        $(this).css('background-image', 'url(images/penguin_6.png)');
        addScore();

    });
    $("#penguin7").click(function() {
        audiop.play()
        $(this).css('background-image', 'url(images/penguin_7.png)');
        addScore();

    });
    $("#penguin8").click(function() {
        audiop.play()
        $(this).css('background-image', 'url(images/penguin_8.png)');
        addScore();

    });
      


    $("#restart").click(function() {
        shuffle();
        resetGame();
      });

});