const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty-select');

// list of words for game

const words = [
    'sigh',
    'laughter',
    'juice',
    'clouds',
    'rainbow',
    'jungle',
    'plants',
    'growth',
    'puppy',
    'mountain',
    'highfalutin',
    'quicksilver',
    'kahlo',
    'jedidiah',
    'maximus',
    'remi',
    'seedlings',
    'exordinary',
    'eggnog',
];

// init word
let randomWord; 

// init score
let score = 0;

// init time
let time = 10;

// focus on text on start
text.focus();

// start counting down
const timeInterval = setInterval(updateTime, 1000);

// generate random word from array
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// add word to DOM
function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

// update score
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

// update time
function updateTime() {
    time--;
    timeEl.innerHTML = time + 's'

    if(time === 0) {
        clearInterval(timeInterval);
        // end game
        gameOver();
    }
}

// game over, show end screen
function gameOver() {
    endgameEl.innerHTML =  `
        <h1>Time ran out!</h1>
        <p>Your final score is ${score}</p>
        <button onclick='location.reload()'>Try Again?</button>
    `;

    endgameEl.style.display = 'flex'
}

addWordToDOM();

// evemt listeners

text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if(insertedText === randomWord) {
        addWordToDOM();
        updateScore();

        // clear
        e.target.value = '';
    }
});