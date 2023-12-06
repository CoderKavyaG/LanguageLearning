const nameSubmitButton = document.querySelector(".add-name-button")
const loggedUser = document.querySelector(".logged-user")
const name1input = document.getElementById("name1")

const userNameInputtCon = document.querySelector(".user-name-input-con")

window.onload = function (){
    userNameInputtCon.classList.remove("hide");
}


nameSubmitButton.addEventListener("click", ()=>{
    console.log(name1input.value)
    loggedUser.innerHTML = name1input.value

     console.log(userNameInputtCon.classList)
    userNameInputtCon.classList.toggle("hide")
    
})


const questions = [
    { question: "Translate 'Good morning' to Punjabi:", answer: "Shubh Saver" },
    { question: "Translate 'Hello' to Punjabi:", answer: "Sat Sri Akal" },
    { question: "Translate 'Thank you' to Punjabi:", answer: "Dhannvad" },
    { question: "Translate 'Yes' to Punjabi:", answer: "Haan" },
    { question: "Translate 'No' to Punjabi:", answer: "Nahi" },
    { question: "Translate 'How are you?' to Punjabi:", answer: "Tusi kive ho?" },
    { question: "Translate 'What is your name?' to Punjabi:", answer: "Tuhada naam ki hai?" },
    { question: "Translate 'I love you' to Punjabi:", answer: "Main tuhanu pyar karda/kardi haan" },
    { question: "Translate 'Where are you from?' to Punjabi:", answer: "Tusi kithon ho?" },
    { question: "Translate 'Goodbye' to Punjabi:", answer: "Alvida" }
  ];
  

  let currentQuestion = 0;
  let score = 0;

  function displayQuestion() {
    document.getElementById('question').innerText = questions[currentQuestion].question;
  }

  function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      score++;
      document.getElementById('score').innerText = score;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
      document.getElementById('answer').value = '';
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    let quizResult = '';
    if (score < 5) {
      quizResult = '<p>Your final score is: ' + score + ' out of ' + questions.length + '</p>' +
        '<p>It seems like you need to revise. Please try again!</p>';
    } else {
      quizResult = '<p>Your final score is: ' + score + ' out of ' + questions.length + '</p>' +
        '<p>Congratulations! You did well.</p>';
    }

    document.getElementById('quiz-container').innerHTML = `
      <h2>Quiz Complete!</h2>
      ${quizResult}
    `;
  }

  window.onload = function() {
    displayQuestion();
  };

  document.getElementById('quizButton').addEventListener('click', function() {
    var quizDiv = document.getElementById('quiz');
    if (quizDiv.style.display === 'none') {
      quizDiv.style.display = 'block';
    } else {
      quizDiv.style.display = 'none';
    }
  });