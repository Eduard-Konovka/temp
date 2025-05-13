// 1 ==========================================

function analyzeInput(arg = []) {
  console.log(Array.isArray(arg) ? "This is an array" : `Type: ${typeof arg}`);
}

analyzeInput();
analyzeInput([4, 5, 6]);
analyzeInput("");
analyzeInput(null);

// 2 ==========================================

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(arr[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(arr[i]), 1000);
}

// 3 ==========================================

let [a, ...b] = [1, 2, 3, 4, 5];

console.log(a, b);

// 4 ==========================================

async function func() {
  return 10;
}

console.log(func());

// 5 ==========================================

function outer(f = inner()) {
  function inner() {
    return "Inner";
  }
}

outer();

// 6 ==========================================

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}

const squareObj = new Square(10);
squareObj.area = 200;

console.log(squareObj.area, squareObj.square);

// 7 ==========================================

class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} vehicle started`);
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.name} car started`);

    super.start();
  }
}

const car = new Car("BMW");

console.log(car.start());
car.start();

// 8 ==========================================

setTimeout(() => {
  console.log("1");
}, 0);

Promise.resolve("hello").then(() => console.log("2"));

console.log("3");

// 9 ==========================================

let count = 10;

(function innerFunc() {
  if (count === 10) {
    let count = 11;

    console.log(count);
  }

  console.log(count);
})();

// 10 =========================================

console.log([0] == false);

// 11 =========================================

if ([0]) {
  console.log("I'm True");
} else {
  console.log("I'm False");
}

// 12 =========================================

message();

function message() {
  console.log("Hello");
}

function message() {
  console.log("Bye");
}

function second() {
  var message;

  console.log(message);
}

function first() {
  var message = "first";

  second();

  console.log(message);
}

var message = "default";

first();

console.log(message);

// 13 =========================================

let user1 = {
  name: "Jacob",

  age: 28,
};

let user2 = {
  name: "Jacob",

  age: 28,
};

console.log(user1 === user2);

// 14 =========================================

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 4000));

const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000));

Promise.all([promiseOne, promiseTwo]).then((data) => console.log(data));
