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

let index = 0;
let score = 0;

function start() {
    index = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    show();
}

function show() {
    reset();

    let currentQuestion = questions[index];
    let questionNumber = index + 1;
    questionElement.innerHTML = questionNumber + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function reset() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

start();