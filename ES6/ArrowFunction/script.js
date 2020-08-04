// function getAge(year) {
//     const current = new Date().getFullYear();
//     return current - year;
// }

// const calculateAge = (year) => {
//     const current = new Date().getFullYear();
//     return current - year;
// }

// const getAge = year => new Date().getFullYear() - year;


// console.log(getAge(1953));
// console.log(calculateAge(1992));

const person = {
    firstName: 'Max',
    age: 33,
    logNameWithTimeout() {
        setTimeout(() => {
            console.log(this.firstName);
        }, 1000);
    }
}
