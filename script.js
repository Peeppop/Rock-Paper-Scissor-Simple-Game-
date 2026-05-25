let move = '';
let result = '';

function computer() {
    const randomno = Math.random();

    if (randomno >= 0 && randomno <= 1/3) {
        move = 'Rock';
    } 
    else if (randomno > 1/3 && randomno < 2/3) {
        move = 'Paper';
    } 
    else if (randomno >= 2/3 && randomno < 1) {
        move = 'Scissors';
    }
}

function rock() {
    computer();

    if (move === 'Rock') {
        result = 'Tie';
    } 
    else if (move === 'Paper') {
        result = 'You Lose';
    } 
    else if (move === 'Scissors') {
        result = 'You Win';
    }

    alert(`You Picked ROCK. Computer picked: ${move}. Final Result: ${result}`);
}

function paper() {
    computer();

    if (move === 'Rock') {
        result = 'You Win';
    } 
    else if (move === 'Paper') {
        result = 'Tie';
    } 
    else if (move === 'Scissors') {
        result = 'You Lose';
    }

    alert(`You Picked PAPER. Computer picked: ${move}. Final Result: ${result}`);
}

function scissors() {
    computer();

    if (move === 'Rock') {
        result = 'You Lose';
    } 
    else if (move === 'Paper') {
        result = 'You Win';
    } 
    else if (move === 'Scissors') {
        result = 'Tie';
    }

    alert(`You Picked SCISSORS. Computer picked: ${move}. Final Result: ${result}`);
}
