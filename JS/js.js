const nav = document.querySelector("nav");
const navClicked = document.querySelector(".menu-btn");

navClicked.onclick = function () {
  if (nav.className === "clicked") {
    nav.className = "";
  } else {
    nav.className = "clicked";
  }
};

function handleScroll() {
  console.log(window.scrollY);

  const scrolledY = window.scrollY;

  if (scrolledY > 200) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);
