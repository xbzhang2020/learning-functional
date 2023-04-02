import { pipe } from "../src/pipe.js";

const splitIntoSpaces = (str) => str.split(" ");
const count = (list) => list.length;
const oddOrEven = (num) => (num % 2 === 0 ? "even" : "odd");
const countWords = pipe(splitIntoSpaces, count, oddOrEven);

console.log(countWords("hello world"));
