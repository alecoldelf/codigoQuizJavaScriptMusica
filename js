const quizData = [
  {
    question: "Qual foi o primeiro álbum lançado por Michael Jackson?",
    options: [
      "Off the Wall",
      "Thriller",
      "Bad",
      "Dangerous",
      "Xcape"
    ],
    answer: 0
  },
  {
    question: "Qual é o nome completo da cantora Beyoncé?",
    options: [
      "Beyoncé Giselle Knowles",
      "Beyoncé Knowles-Carter",
      "Beyoncé Michelle Carter",
      "Beyoncé Gabrielle Carter",
      "Beyoncé Maria Lurdes"
    ],
    answer: 1
  },
  {
    question: "Qual banda foi liderada por Freddie Mercury?",
    options: [
      "The Rolling Stones",
      "Queen",
      "Led Zeppelin",
      "The Beatles",
      "Pink Floyd"
    ],
    answer: 1
  },
  {
    question: "Qual é o gênero musical conhecido por ter origem no reggae jamaicano?",
    options: [
      "Samba",
      "Hip Hop",
      "Dubstep",
      "Dancehall",
      "Rock"
    ],
    answer: 3
  },
  {
    question: "Qual é o nome da cantora conhecida por hits como 'Hello' e 'Rolling in the Deep'?",
    options: [
      "Adele",
      "Taylor Swift",
      "Rihanna",
      "Lady Gaga",
      "Gwen Stefani"
    ],
    answer: 0
  },
  {
    question: "Qual banda é conhecida pelo hit 'Stairway to Heaven'?",
    options: [
      "Led Zeppelin",
      "The Beatles",
      "Queen",
      "Pink Floyd",
      "AC/DC"
    ],
    answer: 0
  },
  {
    question: "Qual é o nome do álbum mais vendido de todos os tempos?",
    options: [
      "Thriller - Michael Jackson",
      "Back in Black - AC/DC",
      "The Dark Side of the Moon - Pink Floyd",
      "The Bodyguard - Trilha sonora",
      "SOS - SZA"
    ],
    answer: 0
  },
  {
    question: "Qual é o gênero musical característico de Elvis Presley?",
    options: [
      "Rock and Roll",
      "Country",
      "Blues",
      "Jazz",
      "Hip-Hop"
    ],
    answer: 0
  },
  {
    question: "Qual foi a primeira banda a usar um sintetizador?",
    options: [
      "AC/DC",
      "Emerson, Lake & Palmer",
      "Eagles",
      "Pink Floyd",
      "Chicago"
    ],
    answer: 1
  },
  {
    question: "Qual banda é considerada por ter criado o Heavy Metal?",
    options: [
      "Led Zeppelin",
      "Journey",
      "Black Sabbath",
      "Metallica",
      "Marillion"
    ],
    answer: 0
  }
];  

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next");
const restartButton = document.getElementById("restart");

function initializeQuiz() {
  currentQuestion = 0;
  score = 0;
  nextButton.style.display = "none";
  restartButton.style.display = "none";
  loadQuestion();
}

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionText.innerText = currentQuizData.question;
  optionsContainer.innerHTML = "";

  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option");
    button.addEventListener("click", checkAnswer);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(event) {
  const selectedOption = event.target;
  const selectedAnswer = selectedOption.innerText;
  const currentQuizData = quizData[currentQuestion];

  if (currentQuizData.options[currentQuizData.answer] === selectedAnswer) {
    selectedOption.classList.add("correct");
    score++;
  } else {
    selectedOption.classList.add("incorrect");
  }

  const options = optionsContainer.getElementsByClassName("option");
  for (let option of options) {
    option.disabled = true;
    if (
      currentQuizData.options[currentQuizData.answer] === option.innerText
    ) {
      option.classList.add("correct");
    }
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    nextButton.style.display = "block";
  } else {
    showResults();
  }
}

function showResults() {
  questionText.innerText = `Você completou o quiz! Sua pontuação é: ${score}/${quizData.length}`;
  optionsContainer.innerHTML = "";
  restartButton.style.display = "block";
}

function nextQuestion() {
  const options = optionsContainer.getElementsByClassName("option");
  for (let option of options) {
    option.disabled = false;
    option.classList.remove("correct", "incorrect");
  }

  nextButton.style.display = "none";
  loadQuestion();
}

initializeQuiz();
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", initializeQuiz);
