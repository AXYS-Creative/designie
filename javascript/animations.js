// ------- GSAP Animations -------

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
};

for (const linkClass in sectionLinks) {
  const linkElement = document.querySelector(linkClass);
  navLinksHighlight(linkElement, sectionLinks[linkClass]);
}
