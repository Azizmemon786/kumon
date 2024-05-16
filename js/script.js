var swiper = new Swiper(".childSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// window.addEventListener("scroll", function(){

//   let navbar = document.getElementById("header")

//   if(window.pageYOffset >= 93){
//     navbar.classList.add('sticky')  
//   }
//   else{
//     navbar.classList.remove('sticky') 
//   }
// })