const COMMON_PATH = './courses/';

const list = document.querySelector('#list');

const lessons = [
  '01-cards',
  '02-drag-n-drop',
  '03-slider',
  '04-board',
  '05-aim-game',
];

generateLinks();

function generateLinks() {
  const lessonsCounter = lessons.length;

  for (let i = 0; i < lessonsCounter; i++) {
    createLessonLink(i);
  }
}

function createLessonLink(index) {
  const lesson = document.createElement('a');

  lesson.classList.add('lessons-list__lesson');
  lesson.textContent = createTitle(lessons[index]);
  lesson.href = COMMON_PATH + lessons[index] + '/index.html';

  list.append(lesson);
}

function createTitle(title) {
  let str = title;

  str = str.split('-');
  str[1] = str[1][0].toUpperCase() + str[1].slice(1);

  return str.join(' ');
}
