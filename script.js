const quizDB = [
  {
    Question: 'What is full form of js ?',
    a: 'java',
    b: 'javascript',
    c: 'i dont know',
    d: 'json',
    ans: 'ans2',
  },
  {
    Question: 'HTML stands for ?',
    a: 'Hyper Text Markup Language',
    b: 'javascript',
    c: 'i dont know',
    d: 'json',
    ans: 'ans1',
  },
  {
    Question: 'CSS abbrevation ?',
    a: 'java',
    b: 'Casecade Style Sheet',
    c: 'Central Superior Services',
    d: 'json',
    ans: 'ans2',
  },
  {
    Question: 'What is react?',
    a: 'library',
    b: 'javascript framework',
    c: 'java framework',
    d: 'nothing',
    ans: 'ans1',
  },
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.Question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};
loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => {
    curAnsElem.checked = false;
  });
};

submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  if (checkedAnswer == quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `<h3>your sore ${score}/${quizDB.length}</h3>
<button class='btn' onclick='location.reload()'> Play Again</button>`;
    showScore.classList.remove('scoreArea');
  }
});
