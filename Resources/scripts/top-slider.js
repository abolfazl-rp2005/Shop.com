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

  function startAutoPlay() {
    let slideIndex = 0;
    const sliderAutomationInterval = setInterval(() => {
      while (slideIndex < sliderImages.length) {
        slideImageElement.setAttribute("src", sliderImages[slideIndex]);
        slideIndex++;
        if (slideIndex > sliderImages.length - 1) {
          slideIndex = 0;
        }
        break;
      }
    }, 1000);
    if (autoPlayElem.classList.contains("bxs-x-circle")) {
      console.log("class is here!");
      clearInterval(sliderAutomationInterval);
    }
    autoPlayElem.classList.toggle("bxs-x-circle");
  }
}
