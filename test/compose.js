import { compose } from "../src/compose.js";

// let number = compose(Math.round, parseFloat);
// let number = (value) => Math.round(parseFloat(value));
// console.log(number("3.14"));

const splitIntoSpaces = (str) => str.split(" ");
const count = (list) => list.length;
const oddOrEven = (num) => (num % 2 === 0 ? "even" : "odd");
const countWords = compose(oddOrEven, count, splitIntoSpaces);

console.log(countWords("hello world"));
