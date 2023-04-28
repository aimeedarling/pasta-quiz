// Define the quiz questions and answers
const quiz = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the largest country in the world?",
        choices: ["Russia", "China", "United States", "Canada"],
        answer: "Russia"
    },
    // Add more questions here
];

// Define other constants and variables
const quizContainer = document.getElementById("quiz");
const timerContainer = document.getElementById("timer");
let currentQuestion = 0;
let secondsLeft = 60;
let timerInterval;

// Function to start the quiz
function startQuiz() {
    // Display the first question and answer options
    displayQuestion();

    // Start the timer
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerContainer.textContent = "Time left: " + secondsLeft;

        if (secondsLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

// Function to display a question and answer options
function displayQuestion() {
    // Display the question
    const questionElem = document.createElement("h2");
    questionElem.textContent = quiz[currentQuestion].question;
    quizContainer.appendChild(questionElem);

    // Display the answer options
    const choices = quiz[currentQuestion].choices;
    for (let i = 0; i < choices.length; i++) {
        const choiceElem = document.createElement("button");
        choiceElem.textContent = choices[i];
        choiceElem.addEventListener("click", function () {
            if (this.textContent === quiz[currentQuestion].answer) {
                // User got the answer right, move on to the next question
                currentQuestion++;
                if (currentQuestion < quiz.length) {
                    displayQuestion();
                } else {
                    endQuiz();
                }
            } else {
                // User got the answer wrong, deduct time and show message
                secondsLeft -= 10;
                if (secondsLeft < 0) {
                    secondsLeft = 0;
                }
                timerContainer.textContent = "Time left: " + secondsLeft;
                alert("Sorry, that's incorrect.");
            }
        });
        quizContainer.appendChild(choiceElem);
    }
}

// Function to end the quiz and show the high score form
function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.innerHTML = "";
    const highScoreForm = document.createElement("form")
}
