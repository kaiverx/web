async function fetchData() {
    let response = await fetch("/data.json"); 
    let data = await response.json();  

    // Находим элемент, куда будем добавлять результаты
    const resultsContainer = document.getElementById("results");

    // 1 способ: Использование обычной функции и метода forEach
    function evaluateRating(item) {
        let rating = item["Оцени работу преподавателя по шкале от 1-10 / 10 – высоко оцениваю работу преподавателя. 1 – совсем не понравилась работа преподавателя"];
        let resultText = `Оценка: ${rating}. `;

        if (rating <= 8) {
            resultText += "Преподавателю есть над чем поработать";
        } else {
            resultText += "Препод огонь";
        }

        // Создаем новый элемент списка и добавляем его в список
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = resultText;

        resultsContainer.appendChild(listItem);
    }

    data.forEach(evaluateRating);

    // 2 способ: Использование стрелочной функции внутри метода forEach
    /*data.forEach(item => {
        let rating = item["Оцени работу преподавателя по шкале от 1-10 / 10 – высоко оцениваю работу преподавателя. 1 – совсем не понравилась работа преподавателя"];
        let resultText = `Оценка: ${rating}. `;

        if (rating <= 8) {
            resultText += "Преподавателю есть над чем поработать";
        } else {
            resultText += "Препод огонь";
        }

        // Создаем новый элемент списка и добавляем его в список
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = resultText;

        resultsContainer.appendChild(listItem);
    });*/

    // 3 способ: Использование обычного цикла for
    /*
    for (let i = 0; i < data.length; i++) {
        let rating = data[i]["Оцени работу преподавателя по шкале от 1-10 / 10 – высоко оцениваю работу преподавателя. 1 – совсем не понравилась работа преподавателя"];
        let resultText = `Оценка: ${rating}. `;

        if (rating <= 8) {
            resultText += "Преподавателю есть над чем поработать";
        } else {
            resultText += "Препод огонь";
        }

        // Создаем новый элемент списка и добавляем его в список
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = resultText;

        resultsContainer.appendChild(listItem);
    }
    */
}
