let viewportHeight = document.documentElement.clientHeight;

const itemsToAnimate = document.querySelectorAll("[data-animate]");
const itemsToAnimateTop = document.querySelectorAll("[data-animate-top]");
const itemsToAnimateBottom = document.querySelectorAll("[data-animate-bottom]");
const itemsToAnimateLeft = document.querySelectorAll("[data-animate-left]");
const itemsToAnimateRight = document.querySelectorAll("[data-animate-right]");

// // ? Базовые стили для анимируемых элементов
// itemsToAnimate.forEach((el) => {
//    el.parentElement.style.overflow = "hidden";
// });

// ? Анимация
window.addEventListener("scroll", showAnimatedItems);
showAnimatedItems();
function showAnimatedItems(e) {
   itemsToAnimate.forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportHeight / 1.1) {
         el.classList.add("animated");
      }
   });
}
