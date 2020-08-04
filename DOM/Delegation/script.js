// let p = document.querySelectorAll('p');

// for (let i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', function(event) {
//         event.target.style.color = 'blue';
//     })
// }

let wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', function(event) {
    console.log(event);
   let tagName = event.target.tagName.toLowerCase();

   if (tagName === 'p') {
       event.target.style.color = 'blue';
   } else {
       event.target.style.color = 'red';
   }

   if (event.target.classList.contains('color')) {
       event.target.style.color = 'yellow';
   }

})