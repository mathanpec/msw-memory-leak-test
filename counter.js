// counter.js

let value = 0;

console.log("Loaded counter");

module.exports = {
  increment: () => value++,
  get: () => value,
};
