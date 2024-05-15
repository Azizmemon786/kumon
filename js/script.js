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





// function readMore() {
//   const dots = document.getElementById("dots");
//   const moreText = document.getElementById("more");
//   const btn = document.getElementById("btn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btn.innerHTML = "Read More";
//     moreText.style.display = "none";
//   }
//   else {
//     dots.style.display = 'none';
//     btn.innerHTML = "Read Less...";
//     moreText.style.display = "inline";
//   }
// }