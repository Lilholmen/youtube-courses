const search = document.querySelector('.menu__search');

const field = document.querySelector('.search__field');
const icon = document.querySelector('.search__icon');
const counter = document.querySelector('.search__char-counter');

const searchLimit = field.getAttribute('maxlength');

document.addEventListener('click', searchSwitch);
document.addEventListener('keyup', closeEscape);

field.addEventListener('keyup', countSearchLength);
field.addEventListener('keydown', (event) => {
  if (event.repeat) {
    countSearchLength();
  }
});

counter.innerHTML = searchLimit;

function searchSwitch(event) {
  if (event.target === icon) {
    icon.classList.add('search--hidden');
    field.classList.remove('search--hidden');
    counter.classList.remove('search--hidden');
  } else if (event.target !== field) {
    field.classList.add('search--hidden');
    counter.classList.add('search--hidden');
    icon.classList.remove('search--hidden');
  }
}

function closeEscape(event) {
  if (event.code == 'Escape') {
    field.classList.add('search--hidden');
    counter.classList.add('search--hidden');
    icon.classList.remove('search--hidden');
  }
}

function countSearchLength() {
  counter.innerHTML = searchLimit - field.value.length;
}
