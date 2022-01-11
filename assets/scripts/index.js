function mobileMenuHanlder() {
  let mainMenuContainer = document.querySelector(".wm-mobile-menu");
  console.log(mainMenuContainer);
  if (mainMenuContainer.className === "wm-mobile-menu") {
    mainMenuContainer.className += " responsive";
  } else {
    mainMenuContainer.className = "wm-mobile-menu";
  }
}
