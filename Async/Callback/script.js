/*
    Client -> Server -> DataDase -> Server -> Client
*/

console.log('Client: I want to get the list of users');
console.log('...');

setTimeout(function() {
    console.log('Server: Ask for the user\'s list in DB');
    console.log('...');

    setTimeout(function(){
        console.log('DB: I form user\'s list');
        console.log('...');

        setTimeout(function() {
            console.log('Server: Transform data to client');
            console.log('...');

            setTimeout(function(){
                console.log('Client: get data and show them!');
            }, 1000);
        }, 500);
    }, 500);
}, 1000);

