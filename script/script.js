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

function generateComp() {
	let i = 0;
	const start = new Date().getTime();
	setInterval(function() {
		if(new Date().getTime() - start > 1000) {
			clearInterval;
			return;
		}
		comp.src = images[i++];
		if(i == images.length) i = 0;
	}, 40)
}

const liveTime = document.getElementById('time');
let hour = 0, min = 0, sec = 0;
setInterval(function(){
	if(sec == 59) {
		sec = 0;
		min++;
	} if(min == 59) {
		min = 0;
		hour++;
	}
	sec += 1;
	liveTime.innerHTML = hour + ' H : ' + min + ' M : ' + sec + ' S';
}, 1000)

const container = document.querySelector('.container');
const liveScore = document.getElementById('liveScore');
const info = container.querySelector('.info');
const comp = container.querySelector('.comp');
const images = ['img/rock.png', 'img/paper.png', 'img/scissors.png'];
let playerScore = 0, compScore = 0;

container.addEventListener('click', function(e) {
	if(e.target.className == 'player') {
		const p = e.target.src.split(/[/.]/)[8];
		const c = compChoice();
		generateComp();

		setTimeout(function() {
			info.innerHTML = battle(p, c);

			if(info.innerHTML == 'You Win') playerScore++;
			if(info.innerHTML == 'You Lose') compScore++;

			comp.src = 'img/' + c + '.png';
			liveScore.innerHTML = playerScore + ' : ' + compScore;
		}, 1000);
		
	}
});
