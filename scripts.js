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

function task1() {
    window.location.href = "../Pract1/index.html";
}

function task2() {
    window.location.href = "../Pract2/index.html";
}

function startTest() {
    let questions = [
        { question: "Что такое JavaScript?", answers: ["Язык программирования", "ЯП"] },
        { question: "Для чего используется JavaScript?", answers: ["Создание интерактивных элементов"] },
        { question: "Можно ли использовать JavaScript для валидации форм?", answers: ["Да"] },
        { question: "Является ли JavaScript языком программирования на стороне сервера?", answers: ["Нет"] },
        { question: "Можно ли с помощью JavaScript работать с файлами на клиенте?", answers: ["Нет"] },
        { question: "Какой метод используется для вывода сообщений в консоль?", answers: ["console.log"] },
        { question: "Как создать переменную в JavaScript?", answers: ["let"] },
        { question: "Как объявить функцию в JavaScript?", answers: ["function"] },
        { question: "Какой оператор используется для сравнения значений?", answers: ["=="] },
        { question: "Какой метод используется для добавления элемента в конец массива?", answers: ["push"] }
    ];

    let userAnswers = [];
    let score = 0;

    questions.forEach((q, index) => {
        let answer = prompt(q.question);
        let isCorrect = q.answers.some(correctAnswer => correctAnswer.toLowerCase() === answer.toLowerCase());
        userAnswers.push({ question: q.question, userAnswer: answer, correctAnswers: q.answers, isCorrect: isCorrect });
        if (isCorrect) {
            score++;
        }
    });

    let result = `Ваш результат: ${score} из ${questions.length}\n`;
    userAnswers.forEach((ans, index) => {
        result += `\nВопрос ${index + 1}: ${ans.question}\nВаш ответ: ${ans.userAnswer} - ${ans.isCorrect ? "Верно" : "Неверно"} (Правильные ответы: ${ans.correctAnswers.join(", ")})\n`;
    });

    document.getElementById('test-result').innerText = result;
}

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
