const timerEl = document.querySelector(".timer")
const loadingScreen = document.querySelector(".loading-screen")
const questionsEl = document.querySelector("#question-section")
const finalScoreEl = document.querySelector(".final-score")
const scoreboardEl = document.querySelector(".scoreboard")
const startBtn = document.querySelector("#start")
const initialsInput = document.querySelector("#initials")
const submitBtn = document.querySelector("#submit")
const a = document.querySelector(".a")
const b = document.querySelector(".b")
const c = document.querySelector(".c")
const d = document.querySelector(".d")
const questionText = document.querySelector(".question-text")
const scoreEl = document.querySelector("#score")
const highScoreListEl = document.querySelector("#high-score-list")
const goBackBtn = document.querySelector(".go-back")
const clearBtn = document.querySelector(".clear")
let highScores = []


const q1 = document.querySelector(".q1")
const q2 = document.querySelector(".q2")
const q3 = document.querySelector(".q3")
const q4 = document.querySelector(".q4")
const q5 = document.querySelector(".q5")

let index = 0

const questions = [{
    question: "1.Which pasta is shaped like a thick spaghetti with hole running through the center?",
    choices: ["Bucatini", "Bigoli", "Macaroni", "Pici"],
    answer: "Bucatini",
},
{
    question: "2. When did tomatoes arrive to Italy?",
    choices: ["late 14th century", "15h century", "early 16th century", "late 16th century"],
    answer: "early 16th century"
},
{
    question: "3. What three ingredients are used in a béchamel sauce?",
    choices: ["milk, flour, and butter", "heavy cream, parmesan, and butter", "egg yolk, butter, and lemon juice", "tomatoes, onion, and butter"],
    answer: "milk, flour, and butter",
},
{
    question: "4. Which continent are tomatoes native to?",
    choices: ["Africa", "Europe", "Asia", "America"],
    answer: "America",

},
{
    question: "5. Spaghetti comes from the word spago in Italian. What does spago mean?",
    choices: ["tasty", "string", "wire", "pasta"],
    answer: "string",
}
]

let score = questions.length * 10
let timeRemaining = questions.length * 10
let timerId = 0


startBtn.addEventListener("click", function () {
    questionsEl.classList.remove("hide")
    loadingScreen.classList.add("hide")
    displayQuestion()
    timerId = setInterval(setTime, 1000)
})

function setTime() {
    timerEl.textContent = "Time left: " + timeRemaining--;
}

function displayQuestion() {
    if (questions[index].question) {
        questionText.textContent = questions[index].question
        a.textContent = questions[index].choices[0]
        b.textContent = questions[index].choices[1]
        c.textContent = questions[index].choices[2]
        d.textContent = questions[index].choices[3]
    }
}

a.addEventListener("click", nextQuestion)
b.addEventListener("click", nextQuestion)
c.addEventListener("click", nextQuestion)
d.addEventListener("click", nextQuestion)

function nextQuestion() {
    if (timeRemaining <= 0 || questions.length == index) {
        endQuiz();
    } else if (this.textContent === questions[index].answer) {
        alert("Correct")
        index++
    } else if (this.textContent !== questions[index].answer) {
        timeRemaining = timeRemaining - 6
        alert("Wrong")
        index++
    }

    if (index < questions.length) {
        displayQuestion()
    } else {
        endQuiz()
    }
}

function endQuiz() {
    timerEl.textContent = "Time left: " + timeRemaining;
    clearInterval(timerId);
    scoreEl.textContent = timeRemaining;
    questionsEl.classList.add("hide")
    finalScoreEl.classList.remove("hide")
    // finalScoreEl.innerHTML = `<p>Your final score is <spa>${score}</span>.</p>`
}

submitBtn.addEventListener("click", function () {
    const initials = initialsInput.value

    highScores.push({
        initials,
        score: timeRemaining
    })
    localStorage.setItem("score", JSON.stringify(highScores))
    finalScoreEl.classList.add("hide")
    scoreboardEl.classList.remove("hide")
    displayScoreboard()
}
)
function displayScoreboard() {
    if (localStorage.getItem("score")) {
        highScores = JSON.parse(localStorage.getItem("score"))
    }
    highScoreListEl.textContent = ""
    for (let i = 0; i < highScores.length; i++) {
        var li = document.createElement("li")
        li.textContent = highScores[i].initials + " - " + highScores[i].score
        highScoreListEl.appendChild(li)
    }
}

goBackBtn.addEventListener("click", function () {
    location.reload()
})

clearBtn.addEventListener("click", function () {
    localStorage.clear()
    highScoreListEl.textContent = ""
})

const scores = JSON.parse(localStorage.getItem("score")) || [];
scores.sort((a, b) => b.score - a.score);

// scores.forEach((scores, index) => {
//     const row = document.createElement("tr");
//     const rank = document.createElement("td");
//     const initials = document.createElement("td");
//     const scoreEl = document.createElement("td");

//     rank.textContent = index + 1;
//     initials.textContent = score.initials;
//     scoreEl.textContent = score.score;

//     row.appendChild(rank);
//     row.appendChild(initials);
//     row.appendChild(scoreEl);
// });