// Burger Logic

const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header-nav");

const toggleNav = () => {
  burger.classList.toggle("active");
  headerNav.classList.toggle("active");

  const expanded = headerNav.classList.contains("active");
  burger.setAttribute("aria-expanded", expanded);

  if (expanded) {
    headerNav.querySelectorAll("a").forEach((link) => {
      link.removeAttribute("tabindex");
    });
  } else {
    headerNav.querySelectorAll("a").forEach((link) => {
      link.setAttribute("tabindex", "-1");
    });
  }
};

burger.addEventListener("click", toggleNav);
