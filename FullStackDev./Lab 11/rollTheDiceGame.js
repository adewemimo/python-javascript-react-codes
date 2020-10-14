var playGame = function (player1, player2){
    var player1Roll= Math.floor(Math.random()*6)+1;
    var player2Roll = Math.ceil(Math.random()*6);  //another method to get the roll dice number
    var winner = "";
    
    if (player1Roll > player2Roll){
      //player1 is the win
      winner = player1 + " is the winner";
    }
    else if (player1Roll < player2Roll){
      //player2 is the winner
      winner = player2 + " is the winner";
  
    }
    else {
      // it is a tie
      winner = "it is a tie" ;
    }
  
    console.log(player1 + " " + player1Roll);
    console.log(player2 + " " + player2Roll);
    console.log(winner);
  
  }
  
  playGame("Seun Soetan" , "Deji Soetan");
  