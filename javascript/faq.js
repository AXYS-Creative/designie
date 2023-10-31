const faqData = [
  {
    question: "Why wouldn't I just hire a full-time designer?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "Is there a limit to how many requests I can have?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "How fast will I receive my designs?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "Who are the designers?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "How does that pause feature work?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "What programs do you design in?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "How do I request designs?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "Is there any design work you don't cover?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "What if I only have a single request?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "Are there any refunds if I don't like the service?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
];

//
// Managing the Q&A content for the FAQ section
//

export function renderFAQs() {
  const faqContent = document.querySelector(".faq-content");

  let htmlString = "";

  // Template Literals (string interpolation)
  faqData.forEach(({ question, answer }) => {
    htmlString += `
              <button class="question-block">
                  <h3 class="question">${question}</h3>
                  <p class="answer">${answer}</p>
              </button>
          `;
  });

  faqContent.innerHTML = htmlString;
}

renderFAQs();

//
// FAQ toggle logic
//

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
