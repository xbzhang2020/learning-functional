import { partial } from "../src/partial.js";

const prettyPrintJson = partial(JSON.stringify, undefined, null, 2);

const obj1 = { foo: "bar", bar: "foo" };
console.log(prettyPrintJson(obj1));

const obj2 = { foo: "baz", baz: "foo" };
console.log(prettyPrintJson(obj2));
