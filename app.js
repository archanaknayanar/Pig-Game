
var scores , roundScore , activePlayer, gamePlaying;

init();

 /***DOM MANIPULATION STARTS FROM HERE***/

document.querySelector('.btn-roll').addEventListener('click', function(){ //anonymous function bz it's not used elsewhere(click action)
	
	if(gamePlaying){
		//1. Random number
		var dice = Math.floor(Math.random()*6)+1; //+1 bcz no need of 0, so 1-6 numbers generated
		//2. Display the number as dice image
		var diceDOM = document.querySelector('.dice'); //Get the random number in diceDOM from step1
		diceDOM.style.display = 'block'; // Display the dice image on the web page
		diceDOM.src = 'dice-' + dice + '.png'; //Display the dice as per the number generated
		//3. If the score is not 1, then add it to current score
		if (dice !== 1){
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else{ 
			nextPlayer();
		}

	}
		
});


document.querySelector('.btn-hold').addEventListener('click', function(){
	
		if(gamePlaying){
			//Add current score to glibal score
		scores[activePlayer] += roundScore;

		//Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		//Check if player won the game
		if (scores[activePlayer] >= 20){
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
			
			
		} else{
			//Next Player
			nextPlayer();
		}
	}
		
	
});



function nextPlayer(){
	//next player
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;

		document.getElementById('current-0').textContent = '0'; // set the score to 0 when dice rolled 1
		document.getElementById('current-1').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active'); //no need of add remove
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
}



document.querySelector('.btn-new').addEventListener('click' , init);





function init(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none'; //querySelector to change the CSS(NO dice display in the beginning)
	//Display the initial scores as 0
	document.getElementById('score-0').textContent = 0; //cmd+shift+D  to duplicate line
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	}






// test























































//document.querySelector('#current-' + activePlayer).textContent = dice; //querySelector method to manipulate the data

//var x = document.querySelector('#score-0').textContent; //querySelector to read the element content.
//console.log(x);








































