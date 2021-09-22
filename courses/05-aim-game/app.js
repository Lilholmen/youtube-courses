const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = +event.target.getAttribute('data-time');
    screens[1].classList.add('up');

    startGame();
  }
});

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createCircle();
  }
});

function startGame() {
  setInterval(decTimer, 1000);

  setTime(time);

  createCircle();
}

function decTimer() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;

    if (current < 10) {
      current = `0${current}`;
    }

    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');

  board.innerHTML = `<h1>Your Score: <span class="primary">${score}<\span><\h1>`;
}

function createCircle() {
  const circle = document.createElement('div');

  const { width, height } = board.getBoundingClientRect();
  const size = getRandomNumber(10, 60);
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = `linear-gradient(90deg, ${randomColor()} 0%, ${randomColor()} 47%, ${randomColor()} 100%)`;

  board.append(circle);
}

function randomColor() {
  return `rgb(${getRandomNumber(0, 255)},${getRandomNumber(
    0,
    255
  )},${getRandomNumber(0, 255)})`;
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
