const slider = document.querySelector('.slider');
const btnBack = slider.querySelector('.slider__controls--back');
const btnforward = slider.querySelector('.slider__controls--forward');
const sliderList = slider.querySelector('.slider__list');
const items = slider.querySelectorAll('.slider__list-item');

let position = 0;
const slideWidth = 794;

btnBack.addEventListener('click', function() {
  position = position - slideWidth;
  if (position < 0) {
    position = (items.length - 1) * 794;
  }
  sliderList.style.left = -position + 'px';
});

btnforward.addEventListener('click', function() {
  position = position + slideWidth;
  if (position > (items.length - 1) * 794) {
    position = 0;
  }
  sliderList.style.left = -position + 'px';
});


