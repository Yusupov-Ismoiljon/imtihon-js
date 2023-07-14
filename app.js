window.addEventListener('scroll', ()=>{
  const elHeader = document.querySelector('header');
  const elHero = document.querySelector('.hero');
  const heroCord = elHero.getBoundingClientRect();
  if (window.screenY > heroCord.top){
      elHeader.classList.add('sticky');
  }else{
      elHeader.classList.remove('sticky');
  }
})
const elmenu = document.getElementById('menu');
const elmenuOpen = document.getElementById('menu-open');
const elmenuExit = document.getElementById('menu-exit');

elmenuOpen.addEventListener('click', () => {
    elmenu.classList.toggle('hidden');
});

elmenuExit.addEventListener('click', () => {
    elmenu.classList.toggle('hidden');
});

// swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });