function compChoice() {
	const choice = Math.random();
	if(choice < 0.34) return 'rock';
	else if(choice < 0.67) return 'paper';
	else return 'scissors';
}

function battle(player, comp) {
	if(player == comp) return 'Draw';
	else if(player == 'rock') {
		return (comp == 'paper') ? 'You Lose' : 'You Win';
	} else if(player == 'paper') {
		return (comp == 'scissors') ? 'You Lose' : 'You Win';
	} else {
		return (comp == 'rock') ? 'You Lose' : 'You Win';
	}
}

const container = document.querySelector('.container');
const liveScore = document.getElementById('liveScore');
const info = container.querySelector('.info');
const comp = container.querySelector('.comp');
let playerScore = 0, compScore = 0;

container.addEventListener('click', function(e) {
	if(e.target.className == 'player') {
		const p = e.target.src.split(/[/.]/)[8];
		const c = compChoice();
		info.innerHTML = battle(p, c);

		if(info.innerHTML == 'You Win') playerScore++;
		if(info.innerHTML == 'You Lose') compScore++;

		comp.src = 'img/' + c + '.png';
		liveScore.innerHTML = playerScore + ' : ' + compScore;
	}
});
