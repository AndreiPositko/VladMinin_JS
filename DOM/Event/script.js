let button = document.querySelector('button');
let h1 = document.querySelector('h1');
let input = document.querySelector('input');

function buttonHandler() {
    console.log('Clicked');
    h1.textContent = input.value;
}
h1.addEventListener('mouseenter', function() {
    this.style.color = 'red';
    this.style.backgroundColor = 'green';
});

h1.addEventListener('mouseleave', function() {
    this.style.color = 'blue';
    this.style.backgroundColor = 'white';
})


button.addEventListener('click', buttonHandler);