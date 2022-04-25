// get elements
// using getElementById
// let state
// events

// COUNTER DEMO
// ----------------------
const button = document.getElementById('my-button');
const span = document.getElementById('results');

console.log(button);
console.log(span);

let count = 0;

function burger(cheese) {
    console.log('i am making you a burger');
    console.log(cheese);
    console.log('toasting the bun');
    console.log('grilling the patty');
    console.log('adding condoments');
}
// const burger2 = () => {
//     console.log('i am making you a burger');
//     console.log('toasting the bun');
//     console.log('grilling the patty');
//     console.log('adding condoments');
// };

burger('cheddar');
// const countIncrease = () => {
//     console.log('clicking the button');
//     // update the count
//     // count = count + 1;
//     count++;
//     // update the view
//     span.textContent = count;
// };

// function countIncrease() {
//     console.log('clicking the button');
//     // update the count
//     // count = count + 1;
//     count++;
//     // update the view
//     span.textContent = count;
// }

button.addEventListener('click', () => {
    console.log('clicking the button');
    // update the count
    // count = count + 1;
    count++;
    // update the view
    span.textContent = count;
});
// ----------------------
