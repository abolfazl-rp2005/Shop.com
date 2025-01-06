const sideMenuOpener = document.getElementById("js-open-side-menu");
const closeSideMenu = document.getElementById("js-close-side-menu");
window.onload = () => {
  sideMenuOpener.addEventListener("click", () => {
    openCloseSideMenu();
  });
  closeSideMenu.addEventListener("click", () => {
    openCloseSideMenu();
  });
};
function openCloseSideMenu() {
  const sideMenu = document.getElementById("js-side-menu");
  sideMenu.classList.toggle("display-none");
  sideMenu.classList.toggle("side-menu-open-animation");
}
