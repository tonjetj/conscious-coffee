const nav = document.querySelector("nav");
const breadcrumbs = document.querySelector(".breadcrumbs");
const logo = document.querySelector("nav .logo");
const menuIcon = document.querySelector("nav .menu-icon");

function handleScroll() {
  console.log(window.scrollY);

  const scrolledY = window.scrollY;

  if (scrolledY > 20) {
    nav.classList.add("scrolled");
    logo.classList.add("scrolled");
    breadcrumbs.classList.add("scrolled");
    menuIcon.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    logo.classList.remove("scrolled");
    breadcrumbs.classList.remove("scrolled");
    menuIcon.classList.remove("scrolled");
  }
}

window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);
