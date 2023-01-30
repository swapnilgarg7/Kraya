const menuToggle = document.querySelector(".menuToggle");
const menuToggleButton = document.querySelector(".MOBmenu");

const toggleNavbar = () => {
  menuToggle.classList.toggle("navbarClose");
};

menuToggleButton.addEventListener("click", () => toggleNavbar());

//faq section

const faqToggleButton = document.querySelectorAll(".faqToggleButton");
const closeAllAnswers = document.querySelectorAll(".mobfaqs");

faqToggleButton.forEach((button) => {
  button.addEventListener("click", () => {
    closeAllAnswers.forEach((answer) => {
      answer.classList.remove("queClicked");
    });
    faqToggleButton.forEach((button) => {
      button.classList.remove("bx-x");
      button.classList.add("bx-plus");
    });
    if (button.classList.contains("bx-plus")) {
      button.classList.remove("bx-plus");
      button.classList.add("bx-x");
      button.parentElement.parentElement.classList.toggle("queClicked");
    } else {
      button.classList.remove("bx-x");
      button.classList.add("bx-plus");
    }
  });
});
