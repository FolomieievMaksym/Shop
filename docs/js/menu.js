const body = document.querySelector("body");
const header = document.querySelector(".header");
const menu = document.querySelector(".header-menu");
const burger = document.querySelector(".burger");
// ! Burger

body.addEventListener("click", burgerToggle);
function burgerToggle(e) {
   if (e.target.closest(".burger")) {
      if (burger.classList.contains("active")) {
         closeBurger();
      } else {
         openBurger();
      }
   } else if (!e.target.closest(".burger") && !e.target.closest(".header-menu__wrapper")) {
      closeBurger();
   } else if (e.target.closest("a") || e.target.closest("button")) {
      closeBurger();
   }
}
function openBurger() {
   body.classList.add("lock");
   header.classList.add("active");
   menu.classList.add("active");
   burger.classList.add("active");
   menu.firstElementChild.style.paddingTop = header.scrollHeight + 20 + "px";
   window.addEventListener("scroll", closeBurger);
}
function closeBurger() {
   body.classList.remove("lock");
   header.classList.remove("active");
   menu.classList.remove("active");
   burger.classList.remove("active");
   window.removeEventListener("scroll", closeBurger);
}

// ! Header

const headerToHide = document.querySelectorAll("[data-to-hide]");
headerToHide.forEach((el) => {
   el.style.overflow = "hidden";
   el.style.transition = "height 0.3s ease 0s";
});

window.addEventListener("scroll", hideHeaderPart);
headerToHide.forEach((el) => {
   el.style.height = el.scrollHeight + "px";
});
setTimeout(() => {
   hideHeaderPart();
}, 3000);
function hideHeaderPart() {
   if (window.pageYOffset > header.scrollHeight / 2) {
      headerToHide.forEach((el) => {
         el.style.height = "0px";
      });
      header.style.opacity = "0.9";
   } else if (window.pageYOffset < header.scrollHeight) {
      headerToHide.forEach((el) => {
         el.style.height = el.scrollHeight + "px";
      });
      header.style.opacity = "1";
   }
}

// ! <main></main>
// document.querySelector("main").style.paddingTop = header.scrollHeight + "px";
if (window.innerWidth < 769) {
   // menu.firstElementChild.style.paddingTop = header.scrollHeight + 20 + "px";
}

let viewportHeight = document.documentElement.clientHeight;
window.addEventListener("scroll", changeHeader);
changeHeader();
function changeHeader() {
   if (window.scrollY >= viewportHeight - header.scrollHeight) {
      header.classList.remove("home");
   } else {
      header.classList.add("home");
   }
   if (window.scrollY <= 5) {
      header.classList.remove("line");
      header.classList.remove("before");
   } else if (window.scrollY >= 5 && window.scrollY <= viewportHeight - header.scrollHeight) {
      header.classList.add("before");
      header.classList.add("line");
   } else {
      header.classList.add("line");
      header.classList.remove("before");
   }
}
