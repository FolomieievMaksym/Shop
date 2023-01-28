if (window.innerWidth < 769) {
   document.body.addEventListener("click", closeAbsoluteAccordion);
   document.querySelectorAll("[drop-down]").forEach((el) => {
      el.parentElement.addEventListener("click", toggleAbsoluteAccordion);
   });
} else {
   document.querySelectorAll("[drop-down]").forEach((el) => {
      el.addEventListener("mouseover", toggleAbsoluteAccordion);
      el.addEventListener("mouseout", closeAbsoluteAccordion);
   });
}
window.addEventListener("scroll", closeAccordion);
function closeAbsoluteAccordion(e) {
   if (!e.target.closest(`[drop-down]`)) {
      closeAccordion();
   }
}
function closeAccordion() {
   document.querySelectorAll("[drop-down]").forEach((el) => {
      el.classList.remove("opened");
      el.children[1].style.height = "0px";
   });
}
// Базовые стили для элементов спойлера

function toggleAbsoluteAccordion(e) {
   if (e.target.closest("[drop-down] > div:first-child")) {
      if (e.target.closest("[drop-down]").classList.contains("opened")) {
         e.target.closest("[drop-down]").classList.remove("opened");
         e.target.closest("[drop-down]").children[1].style.height = "0px";
      } else {
         document.querySelectorAll("[drop-down]").forEach((el) => {
            el.classList.remove("opened");
            el.children[1].style.height = "0px";
         });
         e.target.closest("[drop-down]").classList.toggle("opened");
         e.target.closest("[drop-down]").children[1].style.height =
            e.target.closest("[drop-down]").children[1].scrollHeight + "px";
      }
   }
}
function toggleAbsoluteAccordionHover(e) {
   e.stopPropagation();
   console.log("1");
}
function closeAbsoluteAccordionHover(e) {
   e.stopPropagation();
   console.log("2");
}
