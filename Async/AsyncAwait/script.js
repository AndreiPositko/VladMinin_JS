let button = document.querySelector('#load');
button.addEventListener('click', load);

async function load () {
    let url = 'https://jsonplaceholder.typicode.com/users';
    
    // fetch(url)
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(data) {
    //         let ul = document.querySelector('#list');
            
    //         let html = data.map(function(item) {
    //             return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
    //         });

    //         ul.insertAdjacentHTML('afterbegin', html.join(' '));
    //     })

    let responce = await fetch(url);
    let data = await responce.json();

    let ul = document.querySelector('#list');
            
    let html = data.map(function(item) {
        return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
    });

    ul.insertAdjacentHTML('afterbegin', html.join(' '));
}