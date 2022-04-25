const button1 = document.getElementById('shell-1-button');
console.log(button1);

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

let wins = 0;
let losses = 0;

button1.addEventListener('click', () => {
    console.log('clicking button 1');
    // decide which shell the ball is under
    const randomShell = Math.ceil(Math.random() * 3);
    console.log('the random shell is', randomShell);
    // if randomShell = 1 - increment the wins
    // else increment the losses
    if (randomShell === 1) {
        wins++;
    } else {
        losses++;
    }
    // update the win / loss / total spans
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});
