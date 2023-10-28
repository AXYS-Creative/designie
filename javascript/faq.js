export function faq() {
    const faqQuestion = document.querySelectorAll(".question");
    const faqAnswer = document.querySelectorAll(".answer");
    
    faqQuestion.forEach((faq, index) => {
        faq.addEventListener("click", () => {
            faqAnswer[index].classList.toggle("active");
        });
    });
}

faq();




