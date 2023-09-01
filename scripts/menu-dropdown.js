const menuToggler = document.querySelector(".mobile-nav-toggle");
const subMenus = document.querySelectorAll(".sub-menu"); // curenntly two el 'ul.sub-menu'
const primaryNav = document.getElementById("primary-navigation");
const expandButton = document.querySelectorAll(".primary-navigation > li > span");
menuToggler.addEventListener("click", () => {
  primaryNav.classList.toggle("expanded");
  const backdrop = document.getElementById("backdrop");
  backdrop.classList.toggle("expanded");
});
const openUl = (e) => {
  
  console.log(e.target)
  if (e.target.tagName == "IMG") {
    e.target.parentElement.parentElement.children[1].classList.toggle("expanded");
  } else {
    e.target.parentElement.children[1].classList.toggle("expanded");
  }
}
expandButton.forEach(expandButton => expandButton.addEventListener("click", openUl))