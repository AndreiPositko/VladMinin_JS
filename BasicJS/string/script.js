let str1 = 'Hello World';
let str2 = "Hello World 2";

let personName = 'Виктор';
// let message = `Человека зовут ${personName}`;
let message = 'Человека зовут \'' + personName + '\'';

console.log(message);

console.log(str1);
console.log(str2);

let newMessage = 'Hello world!!!';

console.log(newMessage.length);
console.log(newMessage.toUpperCase());
console.log(newMessage.toLowerCase());
console.log(newMessage.charAt(0));
console.log('IndexOf - ', newMessage.indexOf('world'));
console.log(newMessage.indexOf('cat'));
console.log(newMessage.substr(1, 4));
console.log(newMessage.substr(newMessage.indexOf('world'), 5));
console.log(newMessage.substring(1, 3));
console.log(newMessage.concat('I\'m a programmer!'));
console.log('EndsWith - ', newMessage.endsWith('world!!!'));
console.log('StartsWith - ', newMessage.startsWith('Hello'));
console.log('Includes - ', newMessage.includes('Hello'));
console.log('Slice - ', newMessage.slice(1, -3));
console.log('Split - ', newMessage.split(' '));
console.log('Trim -', '   Hello   '.trim());

// let result;
// for (let i = 0; i <= newMessage.length - 1; i++) {
//     result = newMessage.charAt(i);
//     console.log(result);
// };

