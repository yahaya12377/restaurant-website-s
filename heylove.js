function showMenuBar(){
    const menu = document.querySelector(".menubar");
    menu.style.display = "flex"
}
function hideMenuBar(){
    const menu = document.querySelector(".menubar");
    menu.style.display = "none"
}


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
  spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
      0:{
        slidesPerView: 1
      },
      764:{
        slidesPerView: 2
      },
      1024:{
        slidesPerView: 3
      }
    }
  })