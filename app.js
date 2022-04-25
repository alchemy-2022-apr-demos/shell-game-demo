// get elements
// using getElementById
// let state
// events

const button = document.getElementById('my-button');
const span = document.getElementById('results');

console.log(button);
console.log(span);

let count = 0;

button.addEventListener('click', () => {
    console.log('clicking the button');
    // update the count
    // count = count + 1;
    count++;
    // update the view
    span.textContent = count;
});
