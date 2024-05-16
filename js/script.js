var swiper = new Swiper(".childSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
  
    575: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
}});


// window.addEventListener("scroll", function(){

//   let navbar = document.getElementById("header")

//   if(window.pageYOffset >= 93){
//     navbar.classList.add('sticky')  
//   }
//   else{
//     navbar.classList.remove('sticky') 
//   }
// })