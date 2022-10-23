const header = document.querySelector("header");
const expandNavBtn = header.querySelector(".expand-nav-btn");
const navLinks = header.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (header.classList.contains("opened")) header.classList.remove("opened");
  });
});

expandNavBtn.addEventListener("click", () => {
  header.classList.toggle("opened");
});
