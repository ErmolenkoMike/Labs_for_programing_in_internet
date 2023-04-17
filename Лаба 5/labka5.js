function average(...args) {
    return args.reduce((total, num) => total + num) / args.length;
}

function values(f, low, high) {
    const result = [];
    for (let i = low; i <= high; i++) {
        result.push(f(i));
    }
    return result;
}

function callWithContext(obj, callback) {
    callback.call(obj);
}

const person = {
    name: 'John',
    age: 30,
};

function sayHappyBirthday() {
    const today = new Date().toLocaleDateString();
    console.log(`Today is ${today}! Happy birthday ${this.name}.`);
}

callWithContext(person, sayHappyBirthday);

function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
        },
        getValue() {
            return count;
        },
    };
}

function getGreeting(name) {
    if (getGreeting.name === name) {
        console.log('Returning cached result');
        return getGreeting.result;
    }
    console.log('Calculating result');
    getGreeting.result = `Hello ${name}`;
    getGreeting.name = name;
    return getGreeting.result;
}

function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = createAdder(5);
console.log(add5(3)); // 8

const add10 = createAdder(10);
console.log(add10(5)); // 15

function checkText(arr) {
    return function(fragment) {
        return arr.includes(fragment);
    }
}

const capitalizeProperty = (arr) => {
    return arr.map(obj => {
        return {
            ...obj,
            Property: obj.Property.charAt(0).toUpperCase() + obj.Property.slice(1)
        }
    })
}

const obj = {
    name: "John"
};

function greet(age, occupation) {
    console.log(`Hello, my name is ${this.name}, I'm ${age} years old and I work as a ${occupation}.`);
}

// виклик з використанням call
greet.call(obj, 30, "programmer");

// виклик з використанням apply
greet.apply(obj, [30, "programmer"]);

// виклик з використанням bind
const boundGreet = greet.bind(obj, 30, "programmer");
boundGreet();

function callbackCaller(callback, ...args) {
    console.log(`Calling ${callback.name} with arguments ${args} at ${new Date()}`);
    callback(...args);
}

function cacheLastCall(func) {
    let lastResult;
    let lastCallTime = 0;

    return function (...args) {
        const now = Date.now();
        if (now - lastCallTime < 10000) {
            console.log("Returning cached result:", lastResult);
            return lastResult;
        } else {
            lastResult = func(...args);
            lastCallTime = now;
            console.log("Updating cache with new result:", lastResult);
            return lastResult;
        }
    };
}
