/*
    Client -> Server -> DataDase -> Server -> Client
*/

console.log('Client: I want to get the list of users');
console.log('...');

// setTimeout(function() {
//     console.log('Server: Ask for the user\'s list in DB');
//     console.log('...');

//     setTimeout(function(){
//         console.log('DB: I form user\'s list');
//         console.log('...');

//         setTimeout(function() {
//             console.log('Server: Transform data to client');
//             console.log('...');

//             setTimeout(function(){
//                 console.log('Client: get data and show them!');
//             }, 1000);
//         }, 500);
//     }, 500);
// }, 1000);

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Server: Ask for the user\'s list in DB');
        console.log('...');
        resolve();
    }, 1000);
});


promise.then(function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let users = [
                {uid: 'id1', name: 'Maxim'},
                {uid: 'id2', name: 'Elena'}
            ];
            reject('DB cannot get user\'s list')
            console.log('DB: I form user\'s list', users);
            console.log('...');
            resolve(users);
    }, 500);
    });

});

promise.then(function(dbUsers) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Server: Transform data to client');
            console.log('...');
            // let users = dbUsers.map(function (user) {
            //     return {
            //        id: user.uid,
            //        firstName: user.name,
            //        timestamp: Date.now()
            //     };
            // });
            resolve();
    }, 500);
    });
});

promise.then(function(users) {
    setTimeout(function() {
        console.log('Client: get data and show them!', users);
    }, 1000);
});

promise.catch(function (error) {
    console.error(error);
});

promise.finally(function () {
    console.log('Finally');
})

