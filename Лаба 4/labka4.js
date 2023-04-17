const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Mary', age: 27, city: 'New York' },
    { name: 'Tom', age: 20, city: 'Los Angeles' },
    { name: 'Jane', age: 32, city: 'Chicago' },
    { name: 'Bob', age: 29, city: 'San Francisco' },
];

persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

// for loop
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]);
}

// for-in loop
for (let key in persons) {
    console.log(key, persons[key]);
}

// for-of loop
for (let person of persons) {
    console.log(person);
}

console.log(persons.groupName);
console.log(persons.teacher);
console.log(persons.year);


// Method 1: Using Object.assign() method
const defaults = { mode: 'test', debugLevel: 'error', logFolder: 'root' };
const userSetting = { mode: 'production', debugLevel: 'trace' };

const mergedSettings1 = Object.assign({}, defaults, userSetting);

// Method 2: Using spread operator
const mergedSettings2 = { ...defaults, ...userSetting };

// Method 3: Using for...in loop
const mergedSettings3 = {};

for (let key in defaults) {
    mergedSettings3[key] = userSetting[key] || defaults[key];
}


const person = { name: 'John', age: 23, city: 'Boston' };

Object.defineProperty(person, 'yearOfBirth', {
    get: function() {
        return new Date().getFullYear() - this.age;
    },
    enumerable: true,
    configurable: true
});


console.log(person.yearOfBirth);
person.yearOfBirth = 1999; // Throws an error since the property is read-only

// Method 1: Using the concat() method
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr1 = arr1.concat(arr2);

// Method 2: Using the spread operator
const mergedArr2 = [...arr1, ...arr2];

// Method 3: Using the push() method and a for loop
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

for (let i = 0; i < arr4.length; i++) {
    arr3.push(arr4[i]);
}

const mergedArr3 = arr3;


const personss = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Mary', age: 27, city: 'New York' },
    { name: 'Tom', age: 20, city: 'Los Angeles' },
    { name: 'Jane', age: 32, city: 'Chicago' },
    { name: 'Bob', age: 29, city: 'San Francisco' },
];

const textFragments = personss.map(person => `${person.name} from ${person.city} born in ${new Date().getFullYear() - person.age}`);

console.log(textFragments);


const personses = [
    { name: 'John', age: 25 },
    { name: 'Mary', age: 18 },
    { name: 'Jane', age: 30 },
    { name: 'Peter', age: 40 },
];

const filteredPersons = personses.filter(person => person.age > 20);

console.log(filteredPersons);
// Output: [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Peter', age: 40 }]

const personas = { name: 'John', age: 30, city: 'New York' };

const { name, city } = personas;
console.log(name); // 'John'
console.log(city); // 'New York'

const persones = ['Alice', 'Bob', 'Charlie'];
const [firstPerson] = persones;
console.log(firstPerson); // 'Alice'


function getUserData(name) {
    const user = persons.find(person => person.name === name);
    if (user) {
        return user;
    } else {
        throw new Error('Unable to find user');
    }
}

function showUserInfo(name) {
    console.log('Loading');
    try {
        const user = getUserData(name);
        console.log(user.name, user.city);
    } catch (error) {
        console.error(error.message);
    }
    console.log('Loading finished');
}


function textToLetters(text) {
    return Array.from(text);
}


function reverseWord(word) {
    return word.split('').reverse().join('');
}


function isJSFile(filename) {
    const extension = filename.split('.').pop();
    return extension === 'js';
}


function sentenceToWords(sentence) {
    return sentence.split(' ');
}


function replaceWord(text, oldWord, newWord) {
    // Розділяємо текстовий фрагмент на масив слів
    const words = text.split(' ');

    // Проходимось циклом по кожному елементу масиву слів
    for (let i = 0; i < words.length; i++) {
        // Порівнюємо слово зі словом для заміни
        if (words[i] === oldWord) {
            // Замінюємо слово на нове
            words[i] = newWord;
        }
    }

    // Повертаємо оновлений текстовий фрагмент
    return words.join(' ');
}

// Приклад використання
const text = 'Це речення містить слово "добре".';
const oldWord = 'добре';
const newWord = 'чудово';

const result = replaceWord(text, oldWord, newWord);
console.log(result); // "Це речення містить слово "чудово"."
