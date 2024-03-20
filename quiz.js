// NOTE - Installed Node.js

// NOTE - Install Readline - later
const readlineSync = require("readline-sync");

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
    console.log(`Question ${index + 1}: ${q.question}`); // "template literal"
    // q in this case points to the currently active item in the "questions" array that is currently active
    // For example, this will print out "Question 1: what is 2 + 2?"
    q.options.forEach((option, i) => {
      console.log(`${i + 1}. ${option}`);
    });
    // Request user input via readline
    let userAnswer = readlineSync.question("Your answer (number): ");
    let answerIndex = parseInt(userAnswer, 10) - 1;

    if (answerIndex < 0 || answerIndex >= q.options.length) {
      console.log(`Please select an option from 1 to ${q.options.length}.`);
    } else if (q.options[answerIndex] === q.answer) {
      console.log("Correct!");
      score++;
    } else {
      console.log("Incorrect!");
    }
  });

  console.log(`Your final score is: ${score}/${questions.length}`);
}

quiz();
