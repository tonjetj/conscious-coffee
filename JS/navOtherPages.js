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

const myButton = document.querySelector("#myBtn");
myButton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
