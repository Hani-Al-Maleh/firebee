const imgs = [
  'images/headband.webp',
  'images/firebee-logo-headband.webp',
  'images/mb-app.webp',
  'images/man-head.webp',
  'images/wm-headband.webp',
];

const questionsEls = document.querySelectorAll('.question');

const mobileBtnEl = document.querySelector('.mobile-menu');
const navLinksEl = document.querySelector('.nav-links');
const mainImgEl = document.querySelector('.main-slider-img');
const miniImgEl1 = document.querySelector('.mini-slider-img1');
const miniImgEl2 = document.querySelector('.mini-slider-img2');
const miniImgEl3 = document.querySelector('.mini-slider-img3');
const miniImgEl4 = document.querySelector('.mini-slider-img4');
const miniImgEl5 = document.querySelector('.mini-slider-img5');
mobileBtnEl.addEventListener('click', () => {
  navLinksEl.classList.toggle('show');
});

miniImgEl1.addEventListener('click', () => {
  mainImgEl.attributes[1].value = imgs[0];
});
miniImgEl2.addEventListener('click', () => {
  mainImgEl.attributes[1].value = imgs[1];
});
miniImgEl3.addEventListener('click', () => {
  mainImgEl.attributes[1].value = imgs[2];
});
miniImgEl4.addEventListener('click', () => {
  mainImgEl.attributes[1].value = imgs[3];
});
miniImgEl5.addEventListener('click', () => {
  mainImgEl.attributes[1].value = imgs[4];
});

questionsEls.forEach((question) =>
  question.addEventListener('click', () => {
    const isOpen = question.classList.contains('open');
    questionsEls.forEach((question) => question.classList.remove('open'));
    if (!isOpen) {
      question.classList.toggle('open');
    }
  })
);
