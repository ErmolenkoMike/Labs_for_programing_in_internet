const users = [
    { firstname: 'John', lastname: 'Doe', score: 50 },
    { firstname: 'Jane', lastname: 'Doe', score: 70 },
    { firstname: 'Bob', lastname: 'Smith', score: 80 },
    { firstname: 'Alice', lastname: 'Johnson', score: 90 },
    { firstname: 'Tom', lastname: 'Lee', score: 60 },
    { firstname: 'Sara', lastname: 'Garcia', score: 75 },
    { firstname: 'Mike', lastname: 'Brown', score: 85 },
    { firstname: 'Kelly', lastname: 'Davis', score: 95 },
    { firstname: 'Chris', lastname: 'Wilson', score: 55 },
    { firstname: 'Amy', lastname: 'Nguyen', score: 65 },
    { firstname: 'David', lastname: 'Jones', score: 77 },
    { firstname: 'Karen', lastname: 'Taylor', score: 87 },
    { firstname: 'Brian', lastname: 'Wilson', score: 90 },
    { firstname: 'Lisa', lastname: 'Smith', score: 83 },
    { firstname: 'Matt', lastname: 'Davis', score: 78 },
    { firstname: 'Anna', lastname: 'Kim', score: 72 },
    { firstname: 'Tim', lastname: 'Lee', score: 67 },
    { firstname: 'Jessica', lastname: 'Lopez', score: 92 },
    { firstname: 'Eric', lastname: 'Martinez', score: 62 },
    { firstname: 'Michelle', lastname: 'Jackson', score: 88 }
];

function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomUsers = [];
            while (randomUsers.length < 10) {
                const index = Math.floor(Math.random() * users.length);
                randomUsers.push(users[index]);
            }
            resolve(randomUsers);
        }, 1000);
    });
}

function getNewUsers() {
    return users.slice(0, 5);
}

export { fetchUsers, getNewUsers };


// Функция для скрытия поля ввода и кнопки поиска в блоке leftPanel
function hideSearch() {
    document.querySelector("#search").style.display = "none";
    document.querySelector("#search-btn").style.display = "none";
}

// Функция для отображения поля ввода и кнопки поиска в блоке leftPanel
function showSearch() {
    document.querySelector("#search").style.display = "block";
    document.querySelector("#search-btn").style.display = "block";
}

// Обработчик события на кнопке "Get Users"
document.querySelector("#get-users-btn").addEventListener("click", async () => {
    const users = await fetchUsers(); // Получаем массив пользователей
    const table = createTable(users); // Создаем таблицу
    document.querySelector("#content").appendChild(table); // Добавляем таблицу в блок content
    hideSearch(); // Скрываем поле ввода и кнопку поиска
});

// Обработчик события на кнопке "Search"
document.querySelector("#search-btn").addEventListener("click", () => {
    const searchTerm = document.querySelector("#search").value; // Получаем значение поля ввода
    const rows = document.querySelectorAll("#user-table tbody tr"); // Получаем все строки таблицы
    rows.forEach((row) => {
        // Проходимся по каждой строке таблицы
        const cells = row.querySelectorAll("td");
        let found = false;
        cells.forEach((cell) => {
            // Проходимся по каждой ячейке в строке
            if (cell.textContent.includes(searchTerm)) {
                found = true;
            }
        });
        if (found) {
            row.classList.add("highlighted"); // Если найден искомый текст, то добавляем класс highlighted к строке
        } else {
            row.classList.remove("highlighted"); // Если искомый текст не найден, то убираем класс highlighted
        }
    });
});
