const createLink = ({path, name}) => {
    return `<a target="_blank" href="${path}">${name}</a>`;
}

const ul = document.querySelector('ul');

const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`;

const yandex = `<li>${createLink({path: 'https://yandex.ua', name: 'Yandex'})}</li>`;

ul.insertAdjacentHTML('afterbegin', google);
ul.insertAdjacentHTML('afterbegin', yandex);

const strToLog = `
    Hello
    World
        I am
        New Tab
`;

console.log(strToLog);
