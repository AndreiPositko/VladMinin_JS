let a = document.querySelector('a');
let oldHref = a.getAttribute('href');

console.log(a.getAttribute('title'));
console.log(a.attributes);

a.setAttribute('href', 'https://yandex.ua');
a.setAttribute('title', 'Go to Yandex');
a.textContent = 'Yandex';

let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');

box1.classList.add('red');

let hasClass = box2.classList.contains('blue');
console.log(hasClass);

if (hasClass) {
    box2.classList.remove('blue');
} else {
    box2.classList.add('blue');
}