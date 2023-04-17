// отримуємо елемент з id='main'
var mainDiv = document.getElementById('main');

// додаємо текст до div елементу
mainDiv.innerText = "Привіт, це мій div елемент!";


function init() {
    // створення елементів header, main, footer
    var header = document.createElement('header');
    header.style.height = '100px';
    header.style.backgroundColor = 'lightblue';

    var main = document.createElement('main');
    main.style.height = '500px';
    main.style.backgroundColor = 'lightgray';
    main.style.display = 'flex';

    var footer = document.createElement('footer');
    footer.style.height = '100px';
    footer.style.backgroundColor = 'lightgreen';

    // створення елементів leftPanel, content, rightPanel внутрішньої частини main
    var leftPanel = document.createElement('div');
    leftPanel.style.width = '33%';
    leftPanel.style.backgroundColor = 'orange';

    var content = document.createElement('div');
    content.style.width = '33%';
    content.style.backgroundColor = 'white';
    content.style.textAlign = 'center';

    var rightPanel = document.createElement('div');
    rightPanel.style.width = '33%';
    rightPanel.style.backgroundColor = 'purple';

    // створення елементів loader внутрішніх частин leftPanel, content, rightPanel
    var loaderLeft = document.createElement('div');
    loaderLeft.className = 'loader';
    leftPanel.appendChild(loaderLeft);

    var loaderContent = document.createElement('div');
    loaderContent.className = 'loader';
    content.appendChild(loaderContent);

    var loaderRight = document.createElement('div');
    loaderRight.className = 'loader';
    rightPanel.appendChild(loaderRight);

    // створення елементів кнопок в header
    var userBtn = document.createElement('button');
    userBtn.innerText = 'User Rating';
    userBtn.addEventListener('click', function() {
        content.innerText = 'User Rating';
    });

    var newsBtn = document.createElement('button');
    newsBtn.innerText = 'News';
    newsBtn.addEventListener('click', function() {
        content.innerText = 'News';
    });

    var contactsBtn = document.createElement('button');
    contactsBtn.innerText = 'Contacts';
    contactsBtn.addEventListener('click', function() {
        content.innerText = 'Contacts';
    });

    var aboutBtn = document.createElement('button');
    aboutBtn.innerText = 'About';
    aboutBtn.addEventListener('click', function() {
        content.innerText = 'About';
    });

    // створення елементів блоку Current users та New users в footer
    var currentUsers = document.createElement('div');
    currentUsers.innerText = 'Current users: 10';

    var newUsers = document.createElement('div');
    newUsers.innerText = 'New users: ';
    var userList = document.createElement('ul');
    var users = ['user1', 'user2', 'user3', 'user4', 'user5'];
    for(var i = 0; i < users.length; i++) {
        var li = document.createElement('li');
        li.innerText = users[i];
        userList.appendChild(li);
    }
    newUsers.appendChild(userList);

    // додавання елементів до DOM
    main.appendChild(leftPanel);
    main.appendChild(content);
    main.appendChild(rightPanel);

    header.appendChild(userBtn);
    header.appendChild(newsBtn);

    header.appendChild(contactsBtn);
    header.appendChild(aboutBtn);

    footer.appendChild(currentUsers);
    footer.appendChild(newUsers);

// додавання класу loader
    var loaders = document.getElementsByClassName('loader');
    for(var i = 0; i < loaders.length; i++) {
        loaders[i].classList.add('loader');
    }

// додавання елементів до body
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
}

// запуск функції init при завантаженні сторінки
window.onload = init;


// знаходимо елемент content
var content = document.querySelector('main > div:nth-child(2)');

// знаходимо кнопку Get Users
var getUsersBtn = document.querySelector('button#usersBtn');

// додаємо обробник події click для кнопки
getUsersBtn.addEventListener('click', function() {
    // викликаємо функцію fetchUsers з api.js
    fetchUsers(function(users) {
        // створюємо таблицю та додаємо її в content
        var table = document.createElement('table');
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');
        th1.innerText = 'First Name';
        th2.innerText = 'Last Name';
        th3.innerText = 'Score';
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        thead.appendChild(tr);
        table.appendChild(thead);
        var tbody = document.createElement('tbody');
        for (var i = 0; i < users.length; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            td1.innerText = users[i].firstname;
            td2.innerText = users[i].lastname;
            td3.innerText = users[i].score;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        content.appendChild(table);
    });
});
const fetchUsers = async () => {
    // ... код для получения данных пользователей
};

const createTable = (users) => {
    // ... код для создания таблицы
    // вычисляем сумму баллов
    const totalScore = users.reduce((acc, curr) => acc + curr.score, 0);
    // добавляем элемент для отображения суммы баллов
    const totalScoreElem = document.createElement('div');
    totalScoreElem.textContent = `Total score: ${totalScore}`;
    rightPanel.appendChild(totalScoreElem);
};

const getUsersBtn = document.getElementById('get-users-btn');
getUsersBtn.addEventListener('click', async () => {
    const users = await fetchUsers();
    const table = createTable(users);
    leftPanel.appendChild(table);
    // показываем поле ввода и кнопку поиска
    inputElem.style.display = 'block';
    searchBtn.style.display = 'block';
    // отображаем сумму баллов
    createTable(users);
});
const sortTable = (column, order) => {
    const tableRows = Array.from(document.querySelectorAll("#usersTable tbody tr"));
    tableRows.sort((rowA, rowB) => {
        const cellA = rowA.querySelector(`td:nth-child(${column + 1})`);
        const cellB = rowB.querySelector(`td:nth-child(${column + 1})`);
        const valueA = cellA.textContent.trim();
        const valueB = cellB.textContent.trim();
        if (order === "asc") {
            return valueA.localeCompare(valueB);
        } else {
            return valueB.localeCompare(valueA);
        }
    });
    const tableBody = document.querySelector("#usersTable tbody");
    tableBody.innerHTML = "";
    tableRows.forEach(row => {
        tableBody.appendChild(row);
    });
};

const lastNameHeader = document.querySelector("#usersTable th:nth-child(2)");
lastNameHeader.addEventListener("click", () => {
    const currentOrder = lastNameHeader.getAttribute("data-order");
    const newOrder = currentOrder === "asc" ? "desc" : "asc";
    lastNameHeader.setAttribute("data-order", newOrder);
    sortTable(1, newOrder);
});
