// ------- Mobile Navigation Logic -------
const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header-nav");

export function toggleNav() {
  burger.classList.toggle("active");
  headerNav.classList.toggle("active");

  updateLinkFocusability(headerNav.classList.contains("active"));
}

function updateLinkFocusability(isExpanded) {
  burger.setAttribute("aria-expanded", isExpanded);

  headerNav.querySelectorAll("a").forEach((link) => {
    if (isExpanded) {
      link.removeAttribute("tabindex");
    } else {
      link.setAttribute("tabindex", "-1");
    }
  });
}

const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleMediaChange(e) {
  if (e.matches) {
    updateLinkFocusability(headerNav.classList.contains("active"));
  } else {
    // On larger screens, always ensure the links are focusable
    headerNav.querySelectorAll("a").forEach((link) => {
      link.removeAttribute("tabindex");
    });
  }
}

// Call the function initially
handleMediaChange(mediaQuery);

// Add an event listener to the mediaQuery object
mediaQuery.addListener(handleMediaChange);

export function closeNav() {
  burger.classList.remove("active");
  headerNav.classList.remove("active");
  updateLinkFocusability(false); // Making sure the links are not focusable after closing nav
}

document.querySelectorAll(".header-nav-links").forEach((link) => {
  link.addEventListener("click", closeNav);
});

burger.addEventListener("click", toggleNav);

// ------- GSAP Link class toggle on sroll -------

gsap.registerPlugin(ScrollTrigger);

export const navLinksHighlight = (element, triggerSelector) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top center",
      end: "bottom center",
      onEnter: () => element.classList.add("active"),
      onLeave: () => element.classList.remove("active"),
      onEnterBack: () => element.classList.add("active"),
      onLeaveBack: () => element.classList.remove("active"),
    },
  });
};

const sectionLinks = {
  ".nav-link-benefits": "#benefits-section",
  ".nav-link-work": "#work-section",
  ".nav-link-services": "#services-section",
  ".nav-link-pricing": "#pricing-section",
  ".nav-link-faq": "#faq-section",
};

for (const linkClass in sectionLinks) {
  const linkElement = document.querySelector(linkClass);
  navLinksHighlight(linkElement, sectionLinks[linkClass]);
}
