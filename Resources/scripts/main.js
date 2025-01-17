const sideMenuOpener = document.getElementById("js-open-side-menu");
const closeSideMenu = document.getElementById("js-close-side-menu");
import { sliderInitialize } from "./top-slider.js";
import { Products } from "./products.js";
window.onload = () => {
  sideMenuOpener.addEventListener("click", () => {
    openCloseSideMenu();
  });
  closeSideMenu.addEventListener("click", () => {
    openCloseSideMenu();
  });

  sliderInitialize();
  console.log(Products.productList);
  Products.generateProductDom();
  Products.categories.generateProCategoriesDom();
};

function openCloseSideMenu() {
  const sideMenu = document.getElementById("js-side-menu");
  sideMenu.classList.toggle("display-none");
  sideMenu.classList.toggle("side-menu-open-animation");
}
