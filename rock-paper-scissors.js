let score = JSON.parse(localStorage.getItem('score')) ||  {
    Win: 0,
    Lose: 0,
    Tie: 0
    };
   // resultAlert(choice, result, outcome);

function chooseRandom() {
    return Math.floor(Math.random() * 3);
}

function resultAlert(choice, result, outcome) {
    document.querySelector('.js-score')
.innerHTML = `Win: ${score.Win} Lose: ${score.Lose} Tie: ${score.Tie}`;

if(choice === ""){
    document.querySelector('.js-move').innerHTML = "";
}
else{
    document.querySelector('.js-move')
.innerHTML = `You
<img src="${choice}-emoji.png" class="css-move-icon">
<img src="${result}-emoji.png"class= "css-move-icon">
Computer`;
}



document.querySelector('.js-result')
.innerHTML = `${outcome}`;
}

function findOutCome(choice, result) {
    if (choice === result) {
        score.Tie += 1;
        return 'Tie';
    } else if (
        (choice === 'rock' && result === 'paper') ||
        (choice === 'paper' && result === 'scissors') ||
        (choice === 'scissors' && result === 'rock')
    ) {
        score.Lose += 1;
        return 'Lose';
    } else {
        score.Win += 1;
        return 'Win';
    }
}
function playGame(choice) {
    const choose = chooseRandom();
    let result;

    if (choose === 0) {
        result = 'rock';
    } else if (choose === 1) {
        result = 'paper';
    } else {
        result = 'scissors';
    }
    const outcome = findOutCome(choice, result);
    localStorage.setItem('score', JSON.stringify(score));
    resultAlert(choice, result, outcome);
}
function resetScore() {
    score = {
        Win: 0,
        Lose: 0,
        Tie: 0
    };
    localStorage.removeItem('score');
    resultAlert('', '', '');
}
