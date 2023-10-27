// ------- Mobile Navigation Logic -------

export function toggleNav() {
  burger.classList.toggle("active");
  headerNav.classList.toggle("active");

  const isExpanded = headerNav.classList.contains("active");
  burger.setAttribute("aria-expanded", isExpanded);

  headerNav.querySelectorAll("a").forEach((link) => {
    if (isExpanded) {
      link.removeAttribute("tabindex");
    } else {
      link.setAttribute("tabindex", "-1");
    }
  });
}

export function closeNav() {
  burger.classList.remove("active");
  headerNav.classList.remove("active");
}

const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header-nav");

document.querySelectorAll(".header-nav-links").forEach((link) => {
  link.addEventListener("click", closeNav);
});

burger.addEventListener("click", toggleNav);
