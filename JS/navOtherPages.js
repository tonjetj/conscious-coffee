const nav = document.querySelector("nav");
const breadcrumbs = document.querySelector(".breadcrumbs");

function handleScroll() {
  console.log(window.scrollY);

  const scrolledY = window.scrollY;

  if (scrolledY > 20) {
    nav.classList.add("scrolled");
    breadcrumbs.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    breadcrumbs.classList.remove("scrolled");
  }
}

window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);
