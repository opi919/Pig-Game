

var scores,roundScore,activePlayer,dice,gamePlay,diceSix,input;

    function newGame(){
        scores=[0,0,0];
        roundScore=0;
        activePlayer=1;
        gamePlay=true;
        diceSix=0;
       
        document.querySelector('.img').style.display='none';
       document.querySelector('#score-1').textContent=0;
       document.querySelector('#score-2').textContent=0;
       document.querySelector('#current-1').textContent=0;
       document.querySelector('#current-2').textContent=0;
       document.querySelector('#name-1').textContent='Player-1';
       document.querySelector('#name-2').textContent='Player-2';
       document.querySelector('#name-1').style.color='black';
       document.querySelector('#name-2').style.color='black';
       document.querySelector('.player-2').classList.remove('active');
       document.querySelector('.player-1').classList.remove('active');
       document.querySelector('.player-1').classList.remove('winner');
       document.querySelector('.player-2').classList.remove('winner');
       document.querySelector('.player-1').classList.add('active');
    }
    newGame();

    function nextPlayer(){
        document.querySelector('.player-'+activePlayer).classList.remove('active');
        activePlayer ===1 ?activePlayer=2:activePlayer=1;
        document.querySelector('.player-'+activePlayer).classList.add('active');

        roundScore=0; 
        diceSix=0;
        document.querySelector('#current-1').textContent=0;
        document.querySelector('#current-2').textContent=0;
    }

 function btnRoll(){
     if(gamePlay){
        var dice=Math.floor(Math.random()*6)+1;
        var imgDOM=document.querySelector('.img');
        imgDOM.style.display='block';
        imgDOM.src='images/dice-'+dice+'.png';
        if(dice===6) {
            diceSix++;
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
            if(diceSix>=3){
                nextPlayer();
            }
        }else if(dice===1){
            nextPlayer();
        }else{
            diceSix=0;
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }
     }
 }

 function btnHold(){
    if(gamePlay){
        scores[activePlayer]+=roundScore;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
   
        if(scores[activePlayer]>=50){
           document.querySelector('.player-'+activePlayer).classList.add('winner');
           document.querySelector('#name-'+activePlayer).textContent='WINNER!';
           document.querySelector('#name-'+activePlayer).style.color='green';
           document.querySelector('.player-'+activePlayer).classList.remove('active');
           document.querySelector('.img').style.display='none';
           document.querySelector('#current-'+activePlayer).textContent=0;
           gamePlay=false;
       }else{
        nextPlayer();
       }
    }
 }

 document.querySelector('.btn-roll').addEventListener('click',btnRoll);
 document.querySelector('.btn-hold').addEventListener('click',btnHold);
 document.querySelector('.btn-new').addEventListener('click',newGame);






