let array1, array2, combinedArray;

function task1() {
    // Создание массива 3 разными способами
    array1 = [1, 2, 3, 4, 5];
    array2 = new Array(6, 7, 8, 9, 10);
    let array3 = Array.of(11, 12, 13, 14, 15);

    let output = document.getElementById('output');
    output.innerHTML = "<h3>Задание 1: Создание массивов</h3>";
    output.innerHTML += `<p>Массив 1: ${array1}</p>`;
    output.innerHTML += `<p>Массив 2: ${array2}</p>`;
    output.innerHTML += `<p>Массив 3: ${array3}</p>`;
}

function task2() {
    let output = document.getElementById('output');
    output.innerHTML = "<h3>Задание 2: 5-й элемент массива и его изменение</h3>";
    output.innerHTML += `<p>Исходный 5-й элемент массива 1: ${array1[4]}</p>`;
    array1[4] = 42; // изменяем значение 5-го элемента
    output.innerHTML += `<p>Измененный 5-й элемент массива 1: ${array1[4]}</p>`;
}

function task3() {
    let output = document.getElementById('output');
    output.innerHTML = "<h3>Задание 3: Длина массива при наведении</h3>";

    array1.forEach((item, index) => {
        let div = document.createElement('div');
        div.className = 'array-item';
        div.innerHTML = item;
        div.onmouseover = function() {
            alert(`Длина массива: ${array1.length}`);
        };
        output.appendChild(div);
    });
}

function task4() {
    let output = document.getElementById('output');
    output.innerHTML = "<h3>Задание 4: Все элементы массива</h3>";

    output.innerHTML += "<p>";
    for (let i = 0; i < array1.length; i++) {
        output.innerHTML += array1[i] + " ";
    }
    output.innerHTML += "</p>";
}

function task5() {
    let array3 = [16, 17, 18, 19, 20];
    combinedArray = array1.concat(array2, array3);

    let output = document.getElementById('output');
    output.innerHTML = "<h3>Задание 5: Объединение массивов</h3>";
    output.innerHTML += `<p>Объединенный массив: ${combinedArray}</p>`;
}

function task6() {
    let lastElement = combinedArray.pop();

    let output = document.getElementById('output');
    output.innerHTML = "<h3>Задание 6: Удаление последнего элемента</h3>";
    output.innerHTML += `<p>Удаленный элемент: ${lastElement}</p>`;
    output.innerHTML += `<p>Массив после удаления: ${combinedArray}</p>`;
}

function task7() {
    let lastElement = combinedArray.pop();

    let output = document.getElementById('output');
    output.innerHTML = "<h3>Задание 7: Удаление последнего элемента</h3>";
    output.innerHTML += `<p>Удаленный элемент: ${lastElement}</p>`;
    output.innerHTML += `<p>Массив после удаления: ${combinedArray}</p>`;
}

function task8() {
    combinedArray.unshift("новый элемент");

    let output = document.getElementById('output');
    output.innerHTML = "<h3>Задание 8: Добавление нового элемента в начало массива</h3>";
    output.innerHTML += `<p>Массив после добавления: ${combinedArray}</p>`;
}

function task9() {
    let today = new Date();
    let output = document.getElementById('output');
    output.innerHTML = "<h3>Задание 9: Сегодняшняя дата</h3>";
    output.innerHTML += `<p>Сегодняшняя дата: ${today}</p>`;
}

function task10() {
    let today = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = today.toLocaleDateString('ru-RU', options);

    let output = document.getElementById('output');
    output.innerHTML = "<h3>Задание 10: Форматированная сегодняшняя дата</h3>";
    output.innerHTML += `<p>Сегодня: ${formattedDate}</p>`;
}

function task11() {
    function getRandomNumber() {
        return Math.floor(Math.random() * 51);
    }

    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    let product = num1 * num2;

    let output = document.getElementById('output');
    output.innerHTML = "<h3>Задание 11: Произведение двух случайных чисел</h3>";
    output.innerHTML += `<p>Число 1: ${num1}</p>`;
    output.innerHTML += `<p>Число 2: ${num2}</p>`;
    output.innerHTML += `<p>Произведение: ${product}</p>`;
}
