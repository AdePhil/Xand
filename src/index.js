import Swiper from "swiper";
const buttons = document.querySelectorAll(".xand__dishes-menu button");

window.onload = function() {
  let mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 4000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    effect: "fade",
    fadeEffect: {
      crossFade: false
    }
  });

  buttons.forEach((button, i) =>
    button.addEventListener("click", () => moveSlider(i + 1))
  );

  const moveSlider = i => {
    mySwiper.slideTo(i);
  };
};
