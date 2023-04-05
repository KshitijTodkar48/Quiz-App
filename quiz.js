const data = [
    {
      id: 1,
      question: "What company was originally called 'Cadabra' ? ",
      answers: [
        { answer: "Microsoft", isCorrect: false },
        { answer: "Amazon", isCorrect: true },
        { answer: "Adobe", isCorrect: false },
        { answer: "Walmart", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "What is the 4th letter of the Greek alphabet?",
      answers: [
        { answer: "Epsilon", isCorrect: false },
        { answer: "Eta", isCorrect: false },
        { answer: "Delta", isCorrect: true },
        { answer: "Theta", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "In what country is the Chernobyl nuclear plant located?",
      answers: [
        { answer: "Estonia", isCorrect: false },
        { answer: "Lithuania", isCorrect: false },
        { answer: "Russia", isCorrect: false },
        { answer: "Ukraine", isCorrect: true },
      ],
    },
    {
      id: 4,
      question: "The world’s most earthquake-prone country is:",
      answers: [
        { answer: "China", isCorrect: false },
        { answer: "Japan", isCorrect: true },
        { answer: "Taiwan", isCorrect: false },
        { answer: "South-Korea", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "What is the most abundant gas in the atmosphere?",
      answers: [
        { answer: "Nitrogen", isCorrect: true },
        { answer: "Argon", isCorrect: false },
        { answer: "Oxygen", isCorrect: false },
        { answer: "Carbon-dioxide", isCorrect: false },
      ],
    },
  ];
  
  const gameScreen = document.querySelector(".game");
  const resultScreen = document.querySelector(".result");
  const question = document.querySelector(".question");
  const answersContainer = document.querySelector(".answers");
  const submit = document.querySelector(".submit");
  const play = document.querySelector(".play");
  
  let qIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let total = 0;
  let selectedAnswer;
  
  const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
  };
  
  play.addEventListener("click",()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
  })
  
  const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";
  
    resultScreen.querySelector(
      ".correct"
    ).textContent = `Correct Answers: ${correctCount}`;
  
    resultScreen.querySelector(
      ".wrong"
    ).textContent = `Wrong Answers: ${wrongCount}`;
  
    resultScreen.querySelector(".score").textContent = `Score: ${
      (correctCount - wrongCount) * 10
    }`;
  };
  
  const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers
      .map(
        (item, index) =>
          `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for=${index}>${item.answer}</label>
    </div>
    `
      )
      .join("");
  
    selectAnswer();
  };
  
  const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
      el.addEventListener("click", (e) => {
        selectedAnswer = e.target.value;
      });
    });
  };
  
  const submitAnswer = () => {
    submit.addEventListener("click", () => {
      if (selectedAnswer !== null) {
        selectedAnswer === "true" ? correctCount++ : wrongCount++;
        qIndex++;
        showQuestion(qIndex);
      } else alert("Please select an answer !");
    });
  };
  
  showQuestion(qIndex);
  submitAnswer();