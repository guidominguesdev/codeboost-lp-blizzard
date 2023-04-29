const progressSlide = document.querySelector('.js-progress')

var slideThumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction: 'vertical',
  spaceBetween: 20,
  watchSlidesProgress: true,
});

var slideHero = new Swiper(".slide-principal", {
  effect: 'fade',
  thumbs: {
    swiper: slideThumbnail,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  on: {
    init: function () {
      progressSlide.classList.remove('animate');
      progressSlide.classList.remove('active');
      progressSlide.classList.add('animate');
      progressSlide.classList.add('active');
    },
    slideChangeTransitionStart: function() {
      progressSlide.classList.remove('animate');
      progressSlide.classList.remove('active');
      progressSlide.classList.add('active');
    },
    slideChangeTransitionEnd: function() {
      progressSlide.classList.add('animate');
    }
  }
});


function updateThumbnailPosition() {
  const html = document.querySelector('html');
  const fontSize = parseFloat(getComputedStyle(html).fontSize);
  const container = document.querySelector('.container');
  const heroLeft = document.querySelector('.hero-left');
  const thumbnail = document.querySelector('.slide-thumbnail');

  const thumbnailLeftInRem = (container.getBoundingClientRect().left + (container.offsetWidth * 0.05) - 40) / fontSize;
  const thumbnailTopInRem = heroLeft.getBoundingClientRect().top / fontSize;

  thumbnail.style.position = 'absolute';
  thumbnail.style.left = thumbnailLeftInRem + 'rem';
  thumbnail.style.top = thumbnailTopInRem + 'rem';
  thumbnail.style.transform = 'translateX(-50%)';
}

window.addEventListener('load', function() {
  updateThumbnailPosition();
  window.addEventListener('resize', updateThumbnailPosition);
});
