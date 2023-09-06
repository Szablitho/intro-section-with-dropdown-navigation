const menuToggler = document.querySelector(".mobile-nav-toggle");
const subMenus = document.querySelectorAll(".sub-menu"); // curenntly two el 'ul.sub-menu'
const primaryNav = document.getElementById("primary-navigation");
const expandButton = document.querySelectorAll(".primary-navigation > li > span");

menuToggler.addEventListener("click", () => {
  const icon = menuToggler.children[0].children[0];
  primaryNav.classList.toggle("expanded");
  if (primaryNav.classList.contains("expanded")) {
    icon.src = "images/icon-close-menu.svg";
  } else {
    icon.src = "images/icon-menu.svg";
  }
  const backdrop = document.getElementById("backdrop");
  backdrop.classList.toggle("expanded");
});
const openUl = (e) => {
  // 2 different places to click require 2 slightly different code to execute and class, its either span or img within the span clicked

  if (e.target.tagName == "IMG") {
    e.target.parentElement.parentElement.children[1].classList.toggle("expanded");
    if (e.target.parentElement.parentElement.children[1].classList.contains("expanded")) {
      e.target.src = "images/icon-arrow-up.svg";
    } else {
      e.target.src = "images/icon-arrow-down.svg";
      console.log(e.target.src);
    }
  } else {
    e.target.parentElement.children[1].classList.toggle("expanded");
    if (e.target.parentElement.children[1].classList.contains("expanded")) {
      e.target.children[0].src = "images/icon-arrow-up.svg";
    } else {
      e.target.children[0].src = "images/icon-arrow-down.svg";
    }
  }
}
expandButton.forEach(expandButton => expandButton.addEventListener("click", openUl))