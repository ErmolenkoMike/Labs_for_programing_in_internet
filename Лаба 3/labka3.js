let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);


let namee = "John";
console.log(namee);

let agee = 30;
console.log(agee);


let num1 = 5;
let num2 = 10;
let sum = num1 + num2;


let age = prompt("Введіть свій вік:");
alert(`Ваш вік ${age}`);

let quantity = +prompt("Введіть кількість товару:");
let price = +prompt("Введіть ціну за одиницю:");
let total = quantity * price;
alert(`Загальна сума покупки: ${total}`);

let number = prompt("Введіть число:");
if (number < 0) {
    alert("Введене число від'ємне.");
} else {
    alert("Введене число не від'ємне.");
}


let dayNumber = prompt("Введіть номер дня тижня:");
let dayName;
switch (dayNumber) {
    case "1":
        dayName = "Понеділок";
        break;
    case "2":
        dayName = "Вівторок";
        break;
    case "3":
        dayName = "Середа";
        break;
    case "4":
        dayName = "Четвер";
        break;
    case "5":
        dayName = "П'ятниця";
        break;
    case "6":
        dayName = "Субота";
        break;
    case "7":
        dayName = "Неділя";
        break;
    default:
        dayName = "Неправильний номер дня тижня";
}
alert(dayName);


for (let i = 1; i <= 10; i++) {
    let result = 6 * i;
    console.log(`6 x ${i} = ${result}`);
}

alert("Це повідомлення з'явиться у вікні сповіщення.");
let name = prompt("Як вас звати?");
confirm(`Ви впевнені, що ваше ім'я ${name}?`);


let n = [1, -2, 3, 4, -5];
let thirdNumberSquared = n[2] ** 2;
let firstAndLastSum = n[0] + n[n.length - 1];
let negativeSquaresSum = 0;
for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
        negativeSquaresSum += n[i] ** 2;
    }
}


let cars = [
    {
        ownerName: "Василь",
        modelName: "BMW",
        engineVolume: 1.6,
    },
    {
        ownerName: "Олег",
        modelName: "Audi",
        engineVolume: 2.0,
    },
    {
        ownerName: "Іван",
        modelName: "Toyota",
        engineVolume: 1.4,
    },
];
let minEngineVolumeCar = cars[0];
for (let i = 1; i < cars.length; i++) {
    if (cars[i].engineVolume < minEngineVolumeCar.engineVolume) {
        minEngineVolumeCar = cars[i];
    }
}

let a = +prompt("Введіть число a:");
let b = +prompt("Введіть число b:");
let c = +prompt("Введіть число c:");
let d = +prompt("Введіть число d:");
let max = Math.max(Math.min(a, b), Math.min(c, d));

let word = prompt("Введіть слово:");
let length = word.length;
let reversedWord = "";
for (let i = length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

console.log(sum);