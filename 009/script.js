const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
    text.innerHTML = 'breathe in';
    container.className = 'container grow'

    setTimeout(() => {
        text.innerHTML = 'hold';

        setTimeout(() => {
            text.innerHTML = 'breathe out';
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime);