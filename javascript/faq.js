export function faq() {
  const faqBlock = document.querySelectorAll(".question-block");
  const faqAnswer = document.querySelectorAll(".answer");

  faqBlock.forEach((faq, index) => {
    faq.addEventListener("click", () => {
      faqAnswer[index].classList.toggle("active");
    });
  });
}

faq();
