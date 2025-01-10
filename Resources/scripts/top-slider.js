export function sliderInitialize() {
  //auto play section
  const autoPlayElem = document.getElementById("autoplay");
  const slideImageElement = document.getElementById("slide");
  autoPlayElem.addEventListener("click", () => {
    startAutoPlay();
  });

  //
  const sliderImages = [];
  let nthOfSliderImages = 3;
  for (let i = 1; i <= nthOfSliderImages; i++) {
    sliderImages.push(`Resources/images/slide-${i}.webp`);
  }
  console.log(sliderImages);
  sliderNavigation();
  let sliderAutomationInterval = null;
  function startAutoPlay() {
    let slideIndex = 0;
    if (sliderAutomationInterval === null) {
      sliderAutomationInterval = setInterval(() => {
        while (slideIndex < sliderImages.length) {
          slideImageElement.setAttribute("src", sliderImages[slideIndex]);
          slideIndex++;
          if (slideIndex > sliderImages.length - 1) {
            slideIndex = 0;
          }
          break;
        }
      }, 3300);
    } else {
      clearInterval(sliderAutomationInterval);
      sliderAutomationInterval = null;
    }
    autoPlayElem.classList.toggle("bxs-x-circle");
  }
  function sliderNavigation() {
    const sliderNavContainer = document.getElementsByClassName(
      "slide-nav-container"
    )[0];

    sliderImages.forEach(() => {
      const sliderNavLinks = document.createElement("a");
      sliderNavLinks.classList.add("slider-nav-link");
      sliderNavContainer.appendChild(sliderNavLinks);
      const sliderLinkParent = sliderNavLinks.parentElement;
      let indexOfSlide = Array.prototype.indexOf.call(
        sliderLinkParent.children,
        sliderNavLinks
      );
      sliderNavLinks.addEventListener("click", () => {
        slideImageElement.setAttribute("src", sliderImages[indexOfSlide]);
      });
    });
  }
}
