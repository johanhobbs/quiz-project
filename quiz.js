// NOTE - Installed Node.js

// NOTE - Install Readline - later

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    question: "What is the capital of New Zealand?",
    options: ["Auckland", "Wellington", "Nelson", "Christchurch"],
    answer: "Wellington",
  },
  // TODO - Add more questions here.
];

// Declare quiz function
function quiz() {
  let score = 0;

  //Iterate through questions
  questions.forEach((q, index) => {
    console.log(`Question ${index + 1}: ${q.question}`);
    // q in this case points to the currently active item in the "questions" array that is currently active
  });
}
