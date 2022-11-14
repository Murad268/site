function cartArrow(arrowSelector1, arrowSelector2) {
   let arrow1 = document.querySelector(arrowSelector1);
   let arrow2 = document.querySelector(arrowSelector2);
   arrow1.addEventListener("click", () => {
      if(arrow1.classList.contains('odrardown')) {
         arrow1.classList.remove('arrowActive');
         arrow1.classList.add('arrowPassive');
         arrow2.classList.add('arrowActive');
         arrow2.classList.remove('arrowPassive');
      } else {
         arrow1.classList.remove('arrowActive');
         arrow1.classList.add('arrowPassive');
         arrow2.classList.add('arrowActive');
         arrow2.classList.remove('arrowPassive');
      }
   })
   arrow2.addEventListener("click", () => {
   
   })
}
cartArrow('.odrardown', '.odrarup')
cartArrow('.odrarup', '.odrardown')


var swiper = new Swiper(".mySwiper", {
   autoplay: {
   delay: 5000,
},
});



function good__slider(mainSlider, miniSliders) {
   const main = document.querySelector(mainSlider);
   const sliders = document.querySelectorAll(miniSliders);
   sliders.forEach(item => {
      item.addEventListener('click', (e) => {
         main.src = e.target.src;
      })
   })
}
good__slider('.good__content__wrapper__slider__img img', '.good__content__wrapper__slider__mini__img img');



function listenerClass(btnSelector1, btnSelector2, contentSelector1, contentSelector2) {
   const btn1 = document.querySelector(btnSelector1);
   const btn2 = document.querySelector(btnSelector2);
   const content1 = document.querySelector(contentSelector1);
   const content2 = document.querySelector(contentSelector2);
   btn1.addEventListener('click', (e) => {
      btn2.classList.remove('active__cont__btn');
      e.target.classList.add('active__cont__btn');
      content2.classList.add('active__cont__disble');
      content1.classList.remove('active__cont__disble');
   })
   btn2.addEventListener('click', (e) => {
      btn1.classList.remove('active__cont__btn');
      e.target.classList.add('active__cont__btn');
      content1.classList.add('active__cont__disble');
      content2.classList.remove('active__cont__disble');
   })
}
listenerClass(".good__content__listeners__top1", '.good__content__listeners__top2', '.first__cont', '.second__cont')


