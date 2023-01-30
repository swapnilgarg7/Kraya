const menuToggle = document.querySelector(".menuToggle");
const menuToggleButton = document.querySelector(".MOBmenu");

const toggleNavbar = () => {
  menuToggle.classList.toggle("navbarClose");
};

menuToggleButton.addEventListener("click", () => toggleNavbar());
