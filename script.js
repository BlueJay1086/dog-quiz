var start = document.querySelector("#start")
var homepage = document.querySelector("#homePage")
var quizPage = document.querySelector("#quizPage")
var timerEl = document.querySelector("#time")
var currentQuestion = 0
var secondsLeft = 60
var theTimer

//Timer controls
function timer (){
    theTimer = setInterval(function(){
        secondsLeft--
        timerEl.textContent = secondsLeft
        if(!secondsLeft){
            clearInterval(theTimer)
            console.log('end game')
        }
    },1000)
}

//Change page to the quiz
function displayQuestion() {
    var questionEl = document.querySelector("#question")
    questionEl.textContent = questions[currentQuestion].question
    var optionsEl = document.querySelector("#options")
    optionsEl.innerHTML =''
    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
        var button = document.createElement("button")
        button.textContent = questions[currentQuestion].answers[i]
        button.setAttribute("value", i)
        button.setAttribute("class", "answer")
        optionsEl.appendChild(button)
    }
}

//Hide Homepage
function init(){
    homepage.setAttribute('class','d-none')
    quizPage.classList.remove("d-none")
    timer()
    console.log("clicked");
    displayQuestion()
}

//Process given answer and check for accuracy, end of loop
function checkAnswer(){
    if(!event.target.classList.contains('answer')) return
    console.log(event.target.value, questions[currentQuestion].correctAnswer )
    if(questions[currentQuestion].correctAnswer !== parseInt(event.target.value)){
        secondsLeft -= 15
    }
    currentQuestion++
    console.log(currentQuestion ,questions.length)
    if(currentQuestion === questions.length){
        console.log('end game')
    }else{
        displayQuestion()
    }
}


document.addEventListener('click', checkAnswer)

start.addEventListener("click", init)