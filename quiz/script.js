const qiuzDB = [

{
    question: "Q1: question 1 html",
    a: "option 1",
    b: "option 2",
    c: "option 3",
    d: "option 4",
    ans: "ans4"
},
{

 question: "Q2: question 2",
    a: "option -1",
    b: "option -2",
    c: "option -3",
    d: "option -4",
    ans: "ans3"

},

{

    question: "Q3: question 3",
    a: "option --1",
    b: "option --2",
    c: "option --3",
    d: "option --4",
    ans: "ans2",

}

];



const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4  = document.querySelector('#option4');
const submit = document.querySelector(' #submit');
const answers = document.querySelectorAll('.answer');
 

let questionCount=0;

const loadQuestion =()=>{
    // console.log(qiuzDB[0].question);
const questionList=qiuzDB[questionCount];
question.innerHTML=questionList.question;

option1.innerText = questionList.a;
option2.innerText = questionList.b;
option3.innerText = questionList.c;
option4.innerText = questionList.d;
}
loadQuestion();

getCheckedAnswer=()=>{

    let answer;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    
    return answer;
}
submit.addEventListener('click', function () {
    const checkedAnswer =getCheckedAnswer();
    console.log(checkedAnswer);
});