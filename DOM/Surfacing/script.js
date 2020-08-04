let divs = document.querySelectorAll('div');
let link = document.querySelector('a');

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function(event) {
        event.stopPropagation();
        console.log(this.getAttribute('id'));
    });
}

link.addEventListener('click', handleLinkClick);

function handleLinkClick(event) {
    event.preventDefault();

    let div = divs[0];

    // if (div.style.display === 'none') {
    //     div.style.display = 'flex';
    // } else {
    //     div.style.display = 'none';
    // }

    div.style.display = div.style.display === 'none' ? 'flex' : 'none';

    console.log(div.style.display);
}

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi()

function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }

  let name = "John";

  let work = makeWorker();
  work();