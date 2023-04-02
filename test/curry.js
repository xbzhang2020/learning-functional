import { curry } from "../src/curry.js";

const add = (x, y) => x + y;
export const addCurried = curry(add);

const mul = (x, y, z) => x * y * z;
export const mulCurried = curry(mul);

const res = addCurried(2)(4);
console.log(res);

const res2 = mulCurried(2)(3)(4);
console.log(res2);
