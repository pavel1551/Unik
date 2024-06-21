function task0() {
    let userInput = prompt("Введите текст или число:");
    let myVar = isNaN(userInput) ? userInput : Number(userInput);

    if (typeof myVar === "number") {
        alert("Это число");
    } else {
        alert("Это текст");
    }
}

function task1() {
    let zodiacSign = prompt("Введите ваш знак зодиака:");
    switch (zodiacSign.toLowerCase()) {
        case "овен":
            alert("Привет, Овен!");
            break;
        case "телец":
            alert("Привет, Телец!");
            break;
        case "близнецы":
            alert("Привет, Близнецы!");
            break;
        case "рак":
            alert("Привет, Рак!");
            break;
        case "лев":
            alert("Привет, Лев!");
            break;
        case "дева":
            alert("Привет, Дева!");
            break;
        case "весы":
            alert("Привет, Весы!");
            break;
        case "скорпион":
            alert("Привет, Скорпион!");
            break;
        case "стрелец":
            alert("Привет, Стрелец!");
            break;
        case "козерог":
            alert("Привет, Козерог!");
            break;
        case "водолей":
            alert("Привет, Водолей!");
            break;
        case "рыбы":
            alert("Привет, Рыбы!");
            break;
        default:
            alert("Неизвестный знак зодиака");
    }
}

function task2() {
    let output = document.getElementById('output');
    output.innerHTML = "<h3>Числа от 1 до 40:</h3>";
    
    // Цикл for
    output.innerHTML += "<p>Цикл for:</p>";
    for (let i = 1; i <= 40; i++) {
        output.innerHTML += i + " ";
    }

    // Цикл while
    output.innerHTML += "<p>Цикл while:</p>";
    let j = 1;
    while (j <= 40) {
        output.innerHTML += j + " ";
        j++;
    }

    // Цикл do...while
    output.innerHTML += "<p>Цикл do...while:</p>";
    let k = 1;
    do {
        output.innerHTML += k + " ";
        k++;
    } while (k <= 40);
}

function task3() {
    function showMessage() {
        alert("Это вирусное сообщение!");
        setTimeout(showMessage, 1000); // повторяем сообщение каждую секунду
    }
    showMessage();
}

function task4() {
    let number;
    do {
        number = prompt("Введите число больше 5:");
        if (number === null) break; // пользователь нажал "Отмена"
        number = Number(number); // преобразуем строку в число
    } while (isNaN(number) || number <= 5);

    if (number > 5) {
        alert("Поздравляем! Вы ввели правильное число.");
    } else {
        alert("Вы отменили ввод.");
    }
}

function task5() {
    let output = document.getElementById('output');
    output.innerHTML = "<h3>Четные числа от 8 до 20:</h3>";

    for (let i = 8; i <= 20; i += 2) {
        output.innerHTML += i + " ";
    }
}

function task6() {
    let output = document.getElementById('output');
    output.innerHTML = "<h3>Нечетные числа от 1 до 7, пропустив 5:</h3>";

    for (let i = 1; i <= 7; i++) {
        if (i === 5) continue; // пропускаем число 5
        if (i % 2 !== 0) {
            output.innerHTML += i + " ";
        }
    }
}

function redirectToHomepage() {
    window.location.href = "https://pavel1551.github.io/Unik/"; // URL главной страницы
}
