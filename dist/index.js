"use strict";
//Basic types
let id = 5;
// console.log('ID:', id);
let company = 'Mappa';
let isPublidhed = true;
let x = 'Hello';
let age;
age = 20;
let ids = [1, 2, 3, 4, 5,];
// ids.push(2)
let arr = [1, true, 'Hello'];
//Tuple
let person = [1, 'hello', true];
//Tuple array
let employee;
employee = [
    [1, "eren"],
    [2, "mikasa"],
    [3, "armin"],
];
//Union
let pid;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
const user = {
    id: 1,
    name: 'John'
};
