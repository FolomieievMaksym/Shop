const marquee = document.querySelector(".marquee__wrapper").children;
const marqueeWidth =
   Number(getComputedStyle(marquee[0]).width.slice(0, -2)) +
   Number(getComputedStyle(marquee[0].parentElement).columnGap.slice(0, -2) * marquee.length - 1) / marquee.length;
addMarquee();
function addMarquee() {
   if (window.innerWidth * 10 > marqueeWidth * marquee.length) {
      let newMarquee = marquee[marquee.length - 1].cloneNode(true);
      marquee[marquee.length - 1].parentElement.append(newMarquee);
      console.log("added new marquee");
      addMarquee();
   } else {
      // document.querySelector(".marquee__wrapper").style.animationName = "marquee1";
      // document.querySelector(".marquee__wrapper").style.transition = "transform 15s ease";
      // document.querySelector(".marquee__wrapper").style.transform = "translate(-850%)";
   }
}
document.querySelector("[data-gift-start]").addEventListener("click", startGift);
function startGift() {
   document.querySelector(".marquee__wrapper").style.animationName = "marquee1";
}
