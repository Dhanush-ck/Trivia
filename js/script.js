const questions = [
    {
        question: "Who is the father of Computer?", 
        answers: [
            { text: "Charles Babbage", correct: true},
            { text: "Alan Turing", correct: false},
            { text: "Konrad Zuse", correct: false},
            { text: "Ada Lovelace", correct: false},
        ] 
    },
    {
        question: "How many Bits make one Byte?", 
        answers: [
            { text: "16 Bits", correct: false},
            { text: "32 Bits ", correct: false},
            { text: "8 Bits", correct: true},
            { text: "64 Bits", correct: false},
        ] 
    },
    {
        question: "Which electronic component was used in the first generation of computers?", 
        answers: [
            { text: "Vaccum Tube", correct: true},
            { text: "Transistor", correct: false},
            { text: "Microprocessor", correct: false},
            { text: "Integrated Circuit(IC)", correct: false},
        ] 
    },
    {
        question: "What is the full form of RAM?", 
        answers: [
            { text: "Random Applicable Memory", correct: false},
            { text: "Read Access Memory", correct: false},
            { text: "Read Applicable Memory", correct: false},
            { text: "Random Acces Memory", correct: true},
        ] 
    },
    {
        question: "An address given to a computer connected to a network is called ?", 
        answers: [
            { text: "Local address", correct: false},
            { text: "Localhost", correct: false},
            { text: "Network address", correct: false},
            { text: "IP adderss", correct: true},
        ] 
    },
    {
        question: "C, Java, C++ and PHP are examples for ?", 
        answers: [
            { text: "Software Types", correct: false},
            { text: "Firmware", correct: false},
            { text: "Programming Languages", correct: true},
            { text: "Programming Translators", correct: false},
        ] 
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-area");
const nextButton = document.getElementById("next-btn");

let index;
const count = [];
let score = 0;
let questionNumber;

function start() {
    setIndex();
    score = 0;
    questionNumber = 1;
    // for (let i=0; i<questions.length;i++) {
    //     count.push(0);
    // }
    // nextButton.innerHTML = "Next";
    show();
}

function show() {
    reset();

    let currentQuestion = questions[index];
    questionElement.innerHTML = questionNumber + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function reset() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target; 
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    }
    else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "flex";
}

function showScore() {
    reset();
    questionNumber++;
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "flex";
}

function handleNextButton() {
    questionNumber++;
    setIndex();
    if(questionNumber === questions.length) {
        nextButton.innerHTML = "Show Result";
        // questionNumber++;
    }
    if(questionNumber <= questions.length) {
        show();
        console.log("There");
        console.log(questionNumber);
    }
    else {
        showScore();
        console.log("Here");
        console.log(questionNumber);
        console.log(questions.length);
    }
}

nextButton.addEventListener("click", () => {
    if(questionNumber<questions.length) {
        // questionNumber++;
        handleNextButton();
    }
    else {
        start();
    }
});

function setRandomIndex() {
    index = Math.floor(Math.random()*(questions.length));
}

function check() {
    return count.includes(index);
    // if(count.includes(index)) {
    //     setRandomIndex();
    // }
    // else {
    //     count.push(index);
    // }
}

function setIndex() {
    do {
        setRandomIndex();
    }while(check());
    count.push(index);
    // if(index) {
    //     setRandomIndex();
    //     check();
    // }
    // else {
    //     index = Math.floor(Math.random()*(questions.length));
    //     count.push(index);
    // }
    // index = 1;
}
start();