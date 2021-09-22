const slides = document.querySelectorAll('.slide');

let activeSlide = document.querySelector('.active');

slides.forEach((item) =>
  item.addEventListener('click', () => {
    if (!item.classList.contains('active')) {
      activeSlide?.classList.remove('active');
      item.classList.add('active');

      activeSlide = item;
    }
  })
);
