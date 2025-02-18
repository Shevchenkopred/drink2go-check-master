const containerSlider = document.querySelector('.slider__items');

const prevSlide = document.querySelector('.slider__control--prev');
const nextSlide = document.querySelector('.slider__control--next');

const paginationSlider = Array.from(document.querySelectorAll('.slider__indicator'));

const slides = Array.from(containerSlider.querySelectorAll('.slider__item'));
const slideCount = slides.length;

let currentSlide = 0;

prevSlide.addEventListener('click', showPrevSlide);
nextSlide.addEventListener('click', showNextSlide);

function showPrevSlide () {
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  updateSlider();
  updateSliderPagination();
}

function showNextSlide () {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlider();
  updateSliderPagination();
}

function updateSlider() {
  slides.forEach((slide, index) => {

    if (index === currentSlide) {
      slide.style.display = 'block';

    } else {
      slide.style.display = 'none';
    }
  });
}

function updateSliderPagination() {
  paginationSlider.forEach((pagination, index) => {

    if (index === currentSlide) {
      pagination.classList.add('slider__indicator--active');

    } else {
      pagination.classList.remove('slider__indicator--active');
    }
  });
}


updateSlider();
