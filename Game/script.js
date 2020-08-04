let $start = document.querySelector('#start');
let $game = document.querySelector('#game');
let $time = document.querySelector('#time');
let $result = document.querySelector('#result');
let $timeHeader = document.querySelector('#time-header');
let $resultHeader = document.querySelector('#result-header');
let $gameTime = document.querySelector('#game-time');

let colors = ['red', 'green', 'blue', 'yellow', 'pink'];

let score = 0;
let isGameStarted = false;

$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);
$gameTime.addEventListener('input', setGameTime);

function show($el) {
    $el.classList.remove('hide');
}

function hide($el) {
    $el.classList.add('hide');
}

function startGame() {
    score = 0;
    setGameTime();
    $gameTime.setAttribute('disabled', 'true');
    isGameStarted = true;
    $game.style.backgroundColor = '#fff';
    hide($start);

    let interval = setInterval(function () {
        let time = parseFloat($time.textContent);

        if (time <= 0) {
            clearInterval(interval);
            endGame();
            //end game
        } else {
            $time.textContent = (time - 0.1).toFixed(1);
        }
    }, 100)
    renderBox();
}

function setGameScore() {
    $result.textContent = score.toString();
}

function setGameTime() {
    let time = +$gameTime.value;
    console.log(typeof time);
    $time.textContent = time.toFixed(1);
    show($timeHeader);
    hide($resultHeader);
}

function endGame() {
    isGameStarted = false; //закончили игру
    setGameScore();
    $gameTime.removeAttribute('disabled');
    show($start); //показали кнопку Старт
    $game.innerHTML = ''; //очистили квадраты
    $game.style.backgroundColor = '#ccc'; //бекграунд серый
    hide($timeHeader); //Время игры - убрали
    show($resultHeader); //Ваш результат - добавили
}

function handleBoxClick(event) {
    if (!isGameStarted) {
        return
    }

    if (Array.prototype.includes.call(event.target.classList, 'target-box')) { //если кликаем на див с дата атрибутом
        score++; //увеличиваем счет
        renderBox(); //вызываем функцию
    };
}

function renderBox() {
    $game.innerHTML = ''; //чистит предыдущий див
    let box = document.createElement('div'); //создаем новый див
    let boxSize = getRandom(30, 100);
    let gameSize = $game.getBoundingClientRect(); //Узнаем размер квадрата
    let maxTop = gameSize.height - boxSize;
    let maxLeft = gameSize.width - boxSize;
    let randomColorIndex = getRandom(0, colors.length);

    box.style.height = box.style.width = boxSize + 'px'; //стили
    box.style.position = 'absolute';
    box.style.backgroundColor = colors[randomColorIndex];
    box.classList.add('target-box');
    let top = box.style.top = getRandom(0, maxTop) + 'px';
    console.log(top);
    let left = box.style.left = getRandom(0, maxLeft) + 'px';
    console.log(left);
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', true); //добавляем новый атрибут диву

    $game.insertAdjacentElement('afterbegin', box); //вставляем новый див в game
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}