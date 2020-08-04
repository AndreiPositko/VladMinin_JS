// let div = document.getElementById('playground');
// console.log(div);

// let p = document.getElementsByClassName('text');
// console.log(p);

// let h1 = document.getElementsByTagName('h1');
// console.log(h1);

let div = document.querySelector('#playground');
div.innerHTML = '<h2 style="color: red;">From JavaScript</h2>'
console.log(div.innerHTML);

let p = document.querySelectorAll('.text');
console.log(p);

let h1 = document.querySelector('h1');
h1.textContent = 'Changed from JS'
console.log(h1.textContent);

let ul = document.querySelector('div#playground > div > ul');
console.log(ul);

let input = document.querySelector('input');
console.log(input.value);