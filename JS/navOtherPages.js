const nav = document.querySelector("nav");

function handleScroll() {
  console.log(window.scrollY);

  const scrolledY = window.scrollY;

  if (scrolledY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);
