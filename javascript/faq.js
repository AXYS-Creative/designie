const faqData = [
  {
    question: `Why wouldn't I just hire a full-time designer?`,
    answer: `Valid question. First off, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits. Additionally, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. 
      \nWith the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you need them.`,
  },
  {
    question: `Is there a limit on how many requests I can have?`,
    answer: `Once subscribed, you can add as many design requests to your queue as you'd like, they will then be delivered one by one`,
  },
  {
    question: `How fast will I receive my designs?`,
    answer: `On average, requests are completed in two days or less. More complex requests may take a bit longer.`,
  },
  {
    question: `Who are the designers?`,
    answer: `You may not expect it, but Designie is run by just one person, the founder, Daniel Garcia. We’re a one man band over here. Well, except for some add on requests (such as animations, and websites). Those requests will be completed by trusted and talented partner designers in our network.`,
  },
  {
    question: `How does that pause feature work?`,
    answer: `We recognize that you may not always have enough design work for a full month. If you only have a couple design requests at the moment, you can pause your subscription. 
      \nOur billing cycles run for a 31-day period. For instance, if you subscribe and use the service for 21 days, then pause your subscription, the billing cycle will pause as well, and you'll have 10 days of service remaining to use at your convenience.`,
  },
  {
    question: `What programs do you design in?`,
    answer: `Adobe Illustrator, Photoshop and Figma.`,
  },
  {
    question: `How do I request designs?`,
    answer: `Here at Designie, we like to keep things simple. Once subscribed, you will receive a link to your private (pre-formatted) Trello board to add requests to. Feel free to add any notes, inspo, pictures, screenshots, etc. to your requests via Trello.`,
  },
  {
    question: `What if I don't like the design?`,
    answer: `No problem! We'll work with you to revise your design until you're 100% happy with it.`,
  },
  {
    question: `Is there any design work you don't cover?`,
    answer: `Designie does not do the following design work:
      \n-Document Formatting/Design (Such as medical or legal forms)
      \n-3D Modeling
      \n-Animated Graphics (GIFs, etc.)
      \n-Complex Packaging
      \n-Extensive Print Design (magazines, books, etc.)`,
  },
  {
    question: `What if I only have a single request?`,
    answer: `Totally fine. You can pause your subscription when your design is finished and resume once you need another design. Don't let the remainder of your subscription go to waste!`,
  },
  {
    question: `Do you offer refunds if I don't like the service?`,
    answer: `Due to the high quality and time consuming nature of the work we do not offer refunds.`,
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
                  <p class="answer">${answer.replace(
                    /\n/g,
                    "<br>"
                  )}</p>              
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
      const currentAnswer = faqAnswer[index];

      // If the clicked answer is already active, close it and return
      if (currentAnswer.classList.contains("active")) {
        currentAnswer.classList.remove("active");
        return;
      }

      // Close all answers
      faqAnswer.forEach((answer) => {
        answer.classList.remove("active");
      });

      // Open the clicked answer
      currentAnswer.classList.add("active");
    });
  });
}

faq();
