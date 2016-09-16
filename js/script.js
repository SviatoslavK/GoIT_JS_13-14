"use strict";
var questions=[
    {
        text: "What is the correct HTML5 DOCTYPE declaration?",
        answers: [
            "!DOCTYPE html",
            "!DOCTYPE html5",
            "DOCTYPE html",
            "DOCTYPE html5"
        ],
        correctAnswer: 0
    },
    {
        text: "What is the full form of HTML?",
        answers: [
            "Hypertext Machine Language",
            "Hypertext Memory Language",
            "High Tech Markup Language",
            "Hypertext Markup Language"
        ],
        correctAnswer: 3
    },
    {
        text: "What is the attribute on img tag to specify the image URL?",
        answers: [
            "link",
            "rel",
            "src",
            "href"
        ],
        correctAnswer: 2
    },
    {
        text: "Which of the following in an inline element?",
        answers: [
            "p",
            "div",
            "img",
            "li"
        ],
        correctAnswer: 2
    },
    {
        text: "What is the tag that is used to load and external stylesheet?",
        answers: [
            "link",
            "style",
            "script",
            "css"
        ],
        correctAnswer: 0
    }
];
localStorage.questions = JSON.stringify(questions);
questions = localStorage.questions ? JSON.parse(localStorage.questions) : [];

var title = 'FrontEnd Quiz';
var subtitle = "Этот тест позволяет оценить Ваши знания";


var yourAns = new Array;
var score = 0;
function Engine(question, answer) {yourAns[question]=answer;}
console.log(yourAns);

function Modal(){
    var answerText = "Your result:\n";
    for(var i = 0; i < yourAns.length; ++i){
        var num = i+1;
        answerText=answerText+"Question №"+ num +"\n";
        if(yourAns[i]!=questions[i].correctAnswer){
            answerText=answerText+"Right answer: " +
                questions[i].answers[questions[i].correctAnswer] + "\n";
        }
        else{
            answerText=answerText+"Right! \n";
            ++score;
        }
    }
    answerText=answerText+" Number of correct answers: "+score+"\n";

    alert(answerText);
    yourAns = [];
    score = 0;
    clearForm("quiz");
}
function clearForm(name) {
    var f = document.forms[name];
    for(var i = 0; i < f.elements.length; ++i) {
        if(f.elements[i].checked)
            f.elements[i].checked = false;
    }
}


