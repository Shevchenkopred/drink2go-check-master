const slides = document.querySelectorAll('.slider__item');
const buttonPrev = document.querySelector('.slider__control--prev');
const buttonNext = document.querySelector('.slider__control--next');

const buttonIndicator = document.querySelectorAll('.slider__indicator');

let currentSlide = 0;
slides[currentSlide].style.display = 'block';

const showNextSlide = () => {
  slides[currentSlide].style.display = 'none';
  currentSlide++;
  slides[currentSlide].style.display = 'block';
  checkingStatusButtons();
};

const showPrevSlide = () => {
  slides[currentSlide].style.display = 'none';
  currentSlide--;
  slides[currentSlide].style.display = 'block';
  checkingStatusButtons();
};

const getActiveIndicator = () => {
  buttonIndicator.forEach((item, index) => {
    buttonIndicator[index].classList.remove('slider__indicator--active');
    buttonIndicator[currentSlide].classList.add('slider__indicator--active');
  });
};

function checkingStatusButtons () {
  buttonNext.disabled = currentSlide === slides.length - 1;
  buttonPrev.disabled = currentSlide === 0;
  getActiveIndicator();
}

const showCurrentSlideForIndicator = () => {
  buttonIndicator.forEach((item, index) => {
    item.addEventListener('click', () => {
      slides[currentSlide].style.display = 'none';
      currentSlide = index;
      slides[currentSlide].style.display = 'block';
      checkingStatusButtons ();
    });
  });
};

buttonPrev.addEventListener('click', showPrevSlide);
buttonNext.addEventListener('click', showNextSlide);

function showSlider () {
  checkingStatusButtons();
  showCurrentSlideForIndicator();
  getActiveIndicator();
}

showSlider();
