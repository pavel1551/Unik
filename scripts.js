document.addEventListener('DOMContentLoaded', (event) => {
    displayWelcomeMessage();
});

function getUserName() {
    let userName = prompt("Введите ваше имя:");
    if (userName && userName.trim() !== "") {
        localStorage.setItem('userName', userName);
        displayWelcomeMessage();
    } else {
        alert("Пожалуйста, введите ваше имя.");
    }
}

function displayWelcomeMessage() {
    let userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('welcome-message').innerText = `Привет, ${userName}!`;
    }
}

// Практическая работа №1
function task1() {
    // Демо из предыдущих практических работ
    alert("Демонстрация задач из практической работы №1.");
}

// Практическая работа №2
function task2() {
    // Демо из предыдущих практических работ
    alert("Демонстрация задач из практической работы №2.");
}

// Тест по JavaScript
function startTest() {
    let questions = [
        { question: "Что такое JavaScript?", answer: "Язык программирования" },
        { question: "Для чего используется JavaScript?", answer: "Создание интерактивных элементов" },
        { question: "Можно ли использовать JavaScript для валидации форм?", answer: "Да" },
        { question: "Является ли JavaScript языком программирования на стороне сервера?", answer: "Нет" },
        { question: "Можно ли с помощью JavaScript работать с файлами на клиенте?", answer: "Нет" },
        { question: "Какой метод используется для вывода сообщений в консоль?", answer: "console.log" },
        { question: "Как создать переменную в JavaScript?", answer: "let" },
        { question: "Как объявить функцию в JavaScript?", answer: "function" },
        { question: "Какой оператор используется для сравнения значений?", answer: "==" },
        { question: "Какой метод используется для добавления элемента в конец массива?", answer: "push" }
    ];

    let userAnswers = [];
    let score = 0;

    questions.forEach((q, index) => {
        let answer = prompt(q.question);
        userAnswers.push({ question: q.question, userAnswer: answer, correctAnswer: q.answer, isCorrect: answer === q.answer });
        if (answer === q.answer) {
            score++;
        }
    });

    let result = `Ваш результат: ${score} из ${questions.length}\n`;
    userAnswers.forEach((ans, index) => {
        result += `\nВопрос ${index + 1}: ${ans.question}\nВаш ответ: ${ans.userAnswer} - ${ans.isCorrect ? "Верно" : "Неверно"} (Правильный ответ: ${ans.correctAnswer})\n`;
    });

    document.getElementById('test-result').innerText = result;
}

// Заставка на весь экран
function showFullscreen() {
    let userName = localStorage.getItem('userName') || "Гость";
    let today = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = today.toLocaleDateString('ru-RU', options);

    let fullscreen = document.getElementById('fullscreen');
    let content = document.getElementById('fullscreen-content');
    content.innerHTML = `<p>Привет, ${userName}!</p><p>Сегодня: ${formattedDate}</p>`;
    fullscreen.style.display = "flex";
}

function hideFullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    fullscreen.style.display = "none";
}
