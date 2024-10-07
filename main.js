// Start Change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// End Change navbar styles on scroll

// Start Show / Hide Faq Answer
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // Change Icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// End Show / Hide Faq Answer

// Start Show / Hide Nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open_menu_btn");
const closeBtn = document.querySelector("#close_menu_btn");

// Start Show Nav menu
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});
// End Show  Nav menu

// Start Hide Nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);
// End Hide  Nav menu

// End Show / Hide Nav menu
