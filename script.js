const quizDB = [
    {
        question: "Q1:What is the full form of HTML?",
        a: "Hello to my land",
        b: "Hey text markup language",
        c: "Hypetext makeup language",
        d: "Hypertext markup language",
        ans: "ans4"
    },
    {
        question: "Q2:What is the full form of CSS",
        a: "Cascadind style sheet",
        b: "Cascadind style shap",
        c: "cartoon style sheet",
        d: "cascading supar sheets",
        ans: "ans1"
    },
    {
        question: "Q3:Which of the following is not an operating system?",
        a: "Windows",
        b: " Linux",
        c: "Oracle",
        d: " DOS",
        ans: "ans3"
    },
    {
        question: " Q4:What is the maximum length of the filename in DOS?",

        a: "4",
        b: " 5",
        c: " 8",
        d: " 12",
        ans: "ans3"
    }
   
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount =0;
let score=0;


const LoadQuestion = () =>{

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}

LoadQuestion();

const getCheckedAnswer=() =>{
    let answer;

    answers.forEach((curAnsElem) =>{
      if(curAnsElem.checked){
          answer = curAnsElem.id;
      }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);
   if(checkedAnswer == quizDB[questionCount].ans ){
    score++;
   };

  questionCount++;

  deselectAll();

   if(questionCount < quizDB.length){
       LoadQuestion();
   }else{
       showScore.innerHTML = ' <h3>You scored ${score}/${quizDB.length}</h3> <button class="btn"onclick="location.reload()"> play again</button>';
    showScore.classList.remove('scoreArea');
}
     
});