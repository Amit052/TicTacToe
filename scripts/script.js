 
var currentPlayer = 1;
var players = [{name: '',score: 0 ,steps: []}, {name: '',score: 0 ,steps: []}];
var gameArr = [];
var opp = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var gameActive = false;

 
function checkBoard(x){
    let res = false;
    let strike = [];
 if(players[x].steps.includes(0) && players[x].steps.includes(1) && players[x].steps.includes(2)){
     res = true;
     strike = [0,1,2];
 }
 else
 if(players[x].steps.includes(3) && players[x].steps.includes(4) && players[x].steps.includes(5)){
 strike = [3,4,5]; 
 res = true;   
 }
     else
 if(players[x].steps.includes(6) && players[x].steps.includes(7) && players[x].steps.includes(8)){ res = true;
    strike = [6,7,8]; 
}else
 if(players[x].steps.includes(0) && players[x].steps.includes(3) && players[x].steps.includes(6)){ res = true;
        strike = [0,3,6]; 
}else
 if(players[x].steps.includes(1) && players[x].steps.includes(4) && players[x].steps.includes(7)){ res = true;
        strike = [1,4,7]; 
}else
 if(players[x].steps.includes(2) && players[x].steps.includes(5) && players[x].steps.includes(8)){ res = true;
        strike = [2,5,8]; 
}else
 if(players[x].steps.includes(0) && players[x].steps.includes(4) && players[x].steps.includes(8)){ res = true;
        strike = [0,4,8]; 
} else
 if(players[x].steps.includes(2) && players[x].steps.includes(4) && players[x].steps.includes(6)){ res = true;
    strike = [2,4,6]; 
}
    
    if(res){
        console.log(`%s WINS`, players[x].name);
        players[x].score++;   
        for( let i = 0 ; i < strike.length ; i++){
            gameArr[strike[i]].className += ' win';
        }
document.getElementById('player1_td').innerHTML = players[0].name + ': ' + players[0].score;
document.getElementById('player2_td').innerHTML = players[1].name + ': ' + players[1].score;
        gameActive = false;
     
           }
}

 

document.addEventListener("DOMContentLoaded", function(event) {  
    
     document.getElementById('go_btn').onclick = function(e){e.preventDefault();
 if(document.getElementById('name1_txt').value != '' && document.getElementById('name2_txt').value != '')  {
     players[0].name = document.getElementById('name1_txt').value;
     players[1].name = document.getElementById('name2_txt').value;
     document.getElementById('form_table').style.display = 'none';
     document.getElementById('game_board').style.display = 'inline-table';
     document.getElementById('player1_td').innerHTML = players[0].name + ': ' + players[0].score;
     document.getElementById('player2_td').innerHTML = players[1].name + ': ' + players[1].score;
     
     document.getElementById('status_table').style.display = 'inline-table';
     gameActive = true;
 }                                          
     }
  
    document.getElementById('resetButton').onclick = function(){
        for(let i = 0 ; i < gameArr.length ; i++){
        gameArr[i].innerHTML = '';
            gameArr[i].className = 'gameBtn';
     
    }
        players[0].steps = [];
        players[1].steps = [];
 
        console.log(players[0]);
        console.log(players[1]);
        gameActive = true;
    };
    var gameBtn = document.getElementsByClassName('gameBtn');
    
    
    for(let i = 0 ; i < gameBtn.length ; i++){
        gameArr.push(gameBtn[i]);
    gameBtn[i].onclick = function (e){
        if(gameActive){
        if(gameBtn[i].innerHTML == ''){
            if(currentPlayer == 1){
                players[0].steps.push(i);
                gameBtn[i].innerHTML = 'X'
                currentPlayer = 2;
                checkBoard(0);
                            }
            else{
                players[1].steps.push(i);
                gameBtn[i].innerHTML = 'O';
                currentPlayer = 1;
                checkBoard(1);
            }
        }
        }
    
        
    }; 
    }
});