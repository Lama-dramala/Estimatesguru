const myCarouselElement = document.querySelector('#section2Carousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  touch: true,
  ride: "carousel",
})
const mySecondCarouselElement = document.querySelector('#section6Carousel')

const carouse2 = new bootstrap.Carousel(mySecondCarouselElement, {
  interval: 5000,
  touch: true,
  ride: "carouse2",
})

const swiperSec9 = new Swiper('.section-9-swiper', {
  slidesPerView: "auto",
  spaceBetween: 30,  
  navigation: {
    nextEl: '#section-9-swiper-next',
    prevEl: '#section-9-swiper-prev',
  },
});
const swiperSec10 = new Swiper('.section-10-swiper', {
  slidesPerView: "1",
  spaceBetween: 30,
  navigation: {
    nextEl: '#section-10-swiper-next',
    prevEl: '#section-10-swiper-prev',
  },
  breakpoints: {
    580: {
      slidesPerView: "2",
    },
  }
});

const swiperSec11 = new Swiper('.section-11-swiper', {
  slidesPerView: "auto",
  loop: true,
});

function hideForm(){
    document.getElementById("section-1-main-content").classList.add("hidden")
    document.getElementById("submitFormMessage").classList.remove("hidden")
}
