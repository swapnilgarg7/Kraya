const menuToggle = document.querySelector(".menuToggle");
const menuToggleButton = document.querySelector(".MOBmenu");

const toggleNavbar = () => {
  menuToggle.classList.toggle("navbarClose");
};

menuToggleButton.addEventListener("click", () => toggleNavbar());

//faq mobile section

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

// faq pc section

const faqQue = document.querySelectorAll(".faqQue");
const faqQueArea = document.querySelector(".faqQueArea");
const faqAnsArea = document.querySelector(".faqAnsArea");

const ques = {
  0: "What is Kraya?",
  1: "Why Kraya?",
  2: "Problem of social sellers Kraya is solving for ?",
  3: "What is the vision of Kraya?",
};

const ans = {
  0: "Kraya helps social sellers and small businesses to boost their sales through the power of social media. Our app makes it easy for social sellers to create and manage their   online storefronts, connect with customers, and track their sales and analytics all in one place.",

  1: "Being the best is what it takes to burst that damn bubbles! At Kraya, social sellers are who we work for and do our bit to get things moving for them with ease.",
  2: `The problems that we are solving for social sellers are as follows:
    Very long customer buying journey, a lot of
  1.back and forth in the DMs.
  Spamming by people who are not interested
  2.in your products.
  Scams happening in this area as the only
  3.source of connection is through DMs.`,
  3: "The vision of Kraya is to change the way people buy and sell things online, and redifine ecommerce “The Kraya Way!” ",
};

faqQue.forEach((que, index) => {
  que.addEventListener("click", () => {
    faqQueArea.textContent = ques[index];
    faqAnsArea.textContent = ans[index];
  });
});

//mob waitlist
const EmailMobileCTA = document.querySelector(".EmailMobileCTA");
const mobEmailSubmitRight = document.querySelector(".mobEmailSubmitRight");
const mobWaitlistHide = document.querySelector(".mobWaitlistHide");

const toggleMobWaitlist = () => {
  mobEmailSubmitRight.classList.toggle("mobWaitlistShow");
};

EmailMobileCTA.addEventListener("click", () => toggleMobWaitlist());
mobWaitlistHide.addEventListener("click", () => toggleMobWaitlist());
