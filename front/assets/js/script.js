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
