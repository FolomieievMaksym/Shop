document.body.addEventListener("click", closeAbsoluteAccordion);
window.addEventListener("scroll", closeAccordion);
function closeAbsoluteAccordion(e) {
   if (!e.target.closest(`[data-accordion-absolute]`)) {
      closeAccordion();
   }
}
function closeAccordion() {
   document.querySelectorAll("[data-accordion-absolute]").forEach((el) => {
      el.classList.remove("opened");
      el.children[1].style.height = "0px";
   });
}
// Базовые стили для элементов спойлера
document.querySelectorAll("[data-accordion-absolute]").forEach((el) => {
   el.parentElement.addEventListener("click", toggleAbsoluteAccordion);
   // el.children[0].style.cursor = "pointer";
   // el.children[1].style.height = "0px";
   // el.children[1].style.overflow = "hidden";
   // el.children[1].style.transition = "height 0.5s ease";
});

function toggleAbsoluteAccordion(e) {
   if (e.target.closest("[data-accordion-absolute] > div:first-child")) {
      if (e.target.closest("[data-accordion-absolute]").classList.contains("opened")) {
         e.target.closest("[data-accordion-absolute]").classList.remove("opened");
         e.target.closest("[data-accordion-absolute]").children[1].style.height = "0px";
      } else {
         document.querySelectorAll("[data-accordion-absolute]").forEach((el) => {
            el.classList.remove("opened");
            el.children[1].style.height = "0px";
         });
         e.target.closest("[data-accordion-absolute]").classList.toggle("opened");
         e.target.closest("[data-accordion-absolute]").children[1].style.height =
            e.target.closest("[data-accordion-absolute]").children[1].scrollHeight + "px";
      }
   }
}
