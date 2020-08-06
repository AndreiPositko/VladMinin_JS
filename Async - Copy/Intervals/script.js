// setTimeout(function() {
//     alert('Hello timeout');
// }, 1000);

let counter = 0;

let interval = setInterval(function() {
    console.log(counter++);
}, 1000);

setTimeout(function() {
    clearInterval(interval);
}, 5000);

