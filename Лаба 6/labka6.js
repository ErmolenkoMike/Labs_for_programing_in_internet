// З використанням функції конструктора
function Cara(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Cara("Toyota", "Camry", 2020);
console.log(car1);

// З використанням синтаксису class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const car2 = new Car("Honda", "Civic", 2021);
console.log(car2);


const carProto = {
    start() {
        console.log(`Starting ${this.make} ${this.model}`);
    },
    stop() {
        console.log(`Stopping ${this.make} ${this.model}`);
    },
};

const car3 = Object.create(carProto);
car3.make = "Ford";
car3.model = "Mustang";
car3.year = 2019;

const car4 = Object.create(carProto);
car4.make = "Chevrolet";
car4.model = "Camaro";
car4.year = 2022;

console.log(car3);
console.log(car4);


function Person(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
};

const person1 = new Person("John", "Doe", 1990);
console.log(person1.getFullName());
console.log(person1.getAge());


function Employee(firstName, lastName, birthYear, position) {
    Person.call(this, firstName, lastName, birthYear);
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getFullNameWithPosition = function () {
    return `${this.getFullName()} - ${this.position}`;
};

const employee1 = new Employee("Jane", "Doe", 1985, "Manager");
console.log(employee1.getFullNameWithPosition());


function checkClassEquality(obj1, obj2) {
    if (obj1.constructor === obj2.constructor) {
        console.log(`Both objects belong to the ${obj1.constructor.name} class`);
    } else {
        console.log("Objects belong to different classes");
    }
}


class Persona {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class ObservedPerson extends Persona {
    constructor(firstName, lastName, birthYear) {
        super(firstName, lastName, birthYear);
        this.methodCalls = {};
    }
    getFullName() {
        this.methodCalls["getFullName"] = (this.methodCalls["getFullName"] || 0) + 1;
        console.log(`Method called ${this.methodCalls["getFullName"]} times`);
        return super.getFullName();
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

}

function convertToObservedPerson(person) {
    return new ObservedPerson(person.firstName, person.lastName, person.birthYear);
}


class Shapes {
    constructor() {
        if (this.constructor === Shape) {
            throw new TypeError("Cannot construct abstract Shape class.");
        }
    }
    getArea() {
        throw new TypeError("Abstract method not implemented.");
    }
    getPerimeter() {
        throw new TypeError("Abstract method not implemented.");
    }
}

class Rectangled extends Shapes {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}

class Circlex extends Shapes {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}


// Абстрактний клас Shape
class Shape {
    calculateArea() {}
    calculatePerimeter() {}
}

// Клас Rectangle, який наслідує клас Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Клас Triangle, який наслідує клас Shape
class Triangle extends Shape {
    constructor(base, height, side1, side2) {
        super();
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }

    calculatePerimeter() {
        return this.base + this.side1 + this.side2;
    }
}

// Клас Circle, який наслідує клас Shape
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Масив фігур
const shapes = [
    new Rectangle(4, 5),
    new Triangle(3, 4, 5, 6),
    new Circle(7)
];

// Виклик методів площі та периметра для кожної фігури в масиві
shapes.forEach(shape => {
    console.log(`Area: ${shape.calculateArea()}`);
    console.log(`Perimeter: ${shape.calculatePerimeter()}`);
});
