;"use strict"
$(function(){
    // получаем JSON объект и записываем уго в Local Storage в виде строки
    $.getJSON("http://www.json-generator.com/api/json/get/bUqmHPelWq?indent=2", function (data) {
        localStorage.setItem('questions', JSON.stringify(data));
    });
});
    // записываем в переменную данные из хранилища и переводим в объект
    var test = localStorage.getItem('questions');
        test = JSON.parse(test);

    // шаблон для генерации опросника
    var title = 'FrontEnd Quiz';
    var btnValue = 'Check'
    var quizTemplate = document.getElementById('template').innerHTML;
    var html = _.template(quizTemplate)(test);
    document.write(html);

    // шаблон для кнопки
    var btnTemplate = document.getElementById('button').innerHTML;
    var btn = _.template(btnTemplate)();
    document.write(btn);

    // получение ответов и запись в массив
    var yourAns = new Array;
    var score = 0;
    function Engine(test, answer) {
        yourAns[test]=answer
    };

    // логика появления и скрытия модального окна
    var modalWindow = document.getElementById('modal_form');
    var overlay = document.getElementById('overlay');

function showModal() {
        modalWindow.style.display = 'block';
        modalWindow.style.opacity = 1;
        overlay.style.display = 'block';
    }
function closeModal() {
        modalWindow.style.display = 'none';
        modalWindow.style.opacity = 0;
        overlay.style.display = 'none';
        clearForm("quiz");
    }

function Modal(){
    showModal();

    // шаблон для модального окна
    var modalTemplate = document.getElementById('myModal').innerHTML;
    var modal = _.template(modalTemplate)();
    modalWindow.innerHTML = modal;

    yourAns = [];
    score = 0;
};

// функция очистки формы
function clearForm(name) {
    var f = document.forms[name];
    var elements = document.getElementsByTagName('input');
    for(var i = 0; i < elements.length; i++) {
        if(elements[i].checked)
            elements[i].checked = false;
    }
};

