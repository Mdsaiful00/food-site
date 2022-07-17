let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');
let colseBtn = document.querySelector('#colse-btn');
let shoppingContainer = document.querySelector('.shopping-container');
let cardBtn = document.querySelector('#card-btn');
let userBtn = document.querySelector('#user-btn');
let formBox = document.querySelector('.form-box');
let colseForm = document.querySelector('#colse-form');


searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
})
colseBtn.addEventListener('click', () => {
    searchForm.classList.remove('active');
})

window.onscroll = () => {
    searchForm.classList.remove('active');
    cardBtn.classList.remove('fa-times');
    shoppingContainer.classList.remove('active');
    formBox.classList.remove('active');
    menuBar.classList.remover('fa-times');
    navBar.classList.remove('active');
}

cardBtn.addEventListener('click', () => {
    cardBtn.classList.toggle('fa-times');
    shoppingContainer.classList.toggle('active');
})

userBtn.addEventListener('click' , () =>{
    formBox.classList.toggle('active');
    userBtn.classList.remove('active')
})
colseForm.addEventListener('click' , () =>{
    formBox.classList.remove('active');
})


let menuBar = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');
menuBar.addEventListener('click' , () =>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
})


var swiper = new Swiper(".home-slider", {
    spaceBetween: 40,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});



var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay:3000,
      disableOnInteraction:false,
  }
});



function loader(){
    document.querySelector('.loader-container').classList.add('active');
}
function active(){
    setInterval(loader, 3000);
}
window.onload  = active;