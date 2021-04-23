// app-singleton.js

const counter1 = require("./counter.js");
const counter2 = require("./counter.js");

counter1.increment();
counter1.increment();
counter2.increment();

console.log(counter1.get()); // prints 3
console.log(counter2.get()); // also prints 3
