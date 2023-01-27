let viewportTop = document.documentElement.clientHeight;
window.addEventListener("scroll", showPictures);
showPictures();
function showPictures(e) {
   if (document.querySelector("[data-srcset]")) {
      document.querySelectorAll("[data-srcset]").forEach((el) => {
         if (el.getBoundingClientRect().top <= viewportTop * 1.25) {
            el.setAttribute("src", el.getAttribute("data-srcset"));
            el.removeAttribute("data-srcset");
         } else {
            setTimeout(() => {
               el.setAttribute("src", el.getAttribute("data-srcset"));
               el.removeAttribute("data-srcset");
            }, 45000);
         }
      });
   }
   if (document.querySelector("[data-img-src]")) {
      document.querySelectorAll("[data-img-src]").forEach((el) => {
         if (el.getBoundingClientRect().top <= viewportTop * 1.25) {
            el.setAttribute("src", el.getAttribute("data-img-src"));
            el.removeAttribute("data-img-src");
         } else {
            setTimeout(() => {
               el.setAttribute("src", el.getAttribute("data-img-src"));
               el.removeAttribute("data-img-src");
            }, 45000);
         }
      });
   }
   if (document.querySelector("[data-video-src]")) {
      document.querySelectorAll("[data-video-src]").forEach((el) => {
         if (el.getBoundingClientRect().top <= viewportTop * 1.25) {
            el.setAttribute("src", el.getAttribute("data-video-src"));
            el.removeAttribute("data-video-src");
            if (el.hasAttribute("autoplay")) {
               el.setAttribute("autoplay", "true");
            }
         } else {
            setTimeout(() => {
               el.setAttribute("src", el.getAttribute("data-video-src"));
               el.removeAttribute("data-video-src");
               if (el.hasAttribute("autoplay")) {
                  el.setAttribute("autoplay", "true");
               }
            }, 45000);
         }
      });
   }
   if (document.querySelector("[data-video-source-src]")) {
      document.querySelectorAll("[data-video-source-src]").forEach((el) => {
         if (el.getBoundingClientRect().top <= viewportTop * 1.25) {
            el.setAttribute("src", el.getAttribute("data-video-source-src"));
            el.removeAttribute("data-video-source-src");
            if (el.hasAttribute("autoplay")) {
               el.setAttribute("autoplay", "true");
            }
         } else {
            setTimeout(() => {
               el.setAttribute("src", el.getAttribute("data-video-source-src"));
               el.removeAttribute("data-video-source-src");
               if (el.hasAttribute("autoplay")) {
                  el.setAttribute("autoplay", "true");
               }
            }, 45000);
         }
      });
   }
}
