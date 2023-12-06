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
    { question: "Translate 'Good morning' to Hindi:", answer: "Suprabhat" },
    { question: "Translate 'Hello' to Hindi:", answer: "Namaste" },
    { question: "Translate 'Thank you' to Hindi:", answer: "Dhanyawad" },
    { question: "Translate 'Yes' to Hindi:", answer: "Haan" },
    { question: "Translate 'No' to Hindi:", answer: "Nahi" },
    { question: "Translate 'How are you?' to Hindi:", answer: "Aap Kaise Hai?" },
    { question: "Translate 'What is your name?' to Hindi:", answer: "Aapka naam kya hai?" },
    { question: "Translate 'I love you' to Hindi:", answer: "Main aapse pyara karta/karti hoon" },
    { question: "Translate 'Where are you from?' to Hindi:", answer: "Aap kahan se hai?" },
    { question: "Translate 'Goodbye' to Hindi:", answer: "Alvida" }
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