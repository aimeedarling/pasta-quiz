const timerEl = document.querySelector (".timer")
const loadingScreen = document.querySelector (".loading-screen")
const questionsEl = document.querySelector ("#question-section")
const startBtn = document.querySelector("#start")
const a = document.querySelector(".a")
const b = document.querySelector(".b")
const c = document.querySelector(".c")
const d = document.querySelector(".d")
const questionText = document.querySelector(".question-text")


const q1 = document.querySelector(".q1")
const q2 = document.querySelector(".q2")
const q3 = document.querySelector(".q3")
const q4 = document.querySelector(".q4")
const q5 = document.querySelector(".q5")

const answers = (".questionAnswer")

const finalScore = (".final-score")

const scoreboard = (".scoreboard")

let index = 0

const questions = [{
        question: "1.Which pasta is shaped like a thick spaghetti with hole running through the center?", 
        choices: ["Bucatini", "Bigoli", "Macaroni","Pici"],
        answer: "Bucatini",
    },
    {
        question: "2. When did tomatoes arrive to Italy?",
        choices: ["late 14th century","15h century", "early 16th century", "late 16th century"],
        answer: "early 16th century"
    },
    {
        question: "3. What three ingredients are used in a béchamel sauce?",
        choices: ["milk, flour, and butter", "heavy cream, parmesan, and butter", "egg yolk, butter, and lemon juice","tomatoes, onion, and butter"],
        answer: "milk, flour, and butter",
    },
    {
        question: "4. Which continent are tomatoes native to?",
        choices: ["Africa","Europe","Asia","America"],
        answer:"America",

    },
    {
        question:"5. Spaghetti comes from the word spago in Italian. What does spago mean?",
        choices: ["tasty","string","wire","pasta"],
        answer:"string",
    }
]

let timeRemaining = questions.length *12
let timerId = 0

startBtn.addEventListener("click", function(){
    questionsEl.classList.remove("hide")
    loadingScreen.classList.add("hide")
    displayQuestion()
    timerId= setInterval(setTime, 1000)
})

function displayQuestion() {
    questionText.textContent = questions[index].question
    a.textContent = questions[index].choices[0]
    b.textContent = questions[index].choices[1]
    c.textContent = questions[index].choices[2]
    d.textContent = questions[index].choices[3]
}

a.addEventListener("click", nextQuestion)
b.addEventListener("click", nextQuestion)
c.addEventListener("click", nextQuestion)
d.addEventListener("click", nextQuestion)

function nextQuestion() {
    if(this.textContent === questions[index].answer){
        alert("Correct")
    }
    else{
        timeRemaining= timeRemaining - 6
        alert("Wrong")
    }
    index++
    displayQuestion()
}

function setTime(){
    timerEl.textContent=timeRemaining--
  }

  if timerId === 0
  then clearTimeout

// function setTime() {
//     // Sets interval in variable
//     const timerInterval = setInterval(function () {
//         secondsLeft--;
//         timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//         if (secondsLeft === 0) {
//             // Stops execution of action at set interval
//             clearInterval(timerInterval);
//             // Calls function to create and append image
//             sendMessage();
//         }

//     }, 1000);
// }

// addEventListener("click", function {
    
// })