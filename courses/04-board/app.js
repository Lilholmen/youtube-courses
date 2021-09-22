const board = document.querySelector('#board');

const SQUARES_NUMBER = 400;

const colors = [
  '#FF0000',
  '#BF3030',
  '#A60000',
  '#FF4040',
  '#FF7373',
  '#FF7400',
  '#BF7130',
  '#A64B00',
  '#FF9640',
  '#FFB273',
  '#009999',
  '#1D7373',
  '#006363',
  '#33CCCC',
  '#5CCCCC',
  '#00CC00',
  '#269926',
  '#008500',
  '#39E639',
  '#67E667',
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');

  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    setColor(square);
  });
  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(el) {
  const color = genColor();

  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.backgroundColor = '#1d1d1d';
  el.style.boxShadow = '0 0 2px #000';
}

function genColor() {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}
