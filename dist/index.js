"use strict";
//Basic types
// let id: number = 5;
// console.log('ID:', id);
let company = 'Mappa';
let isPublidhed = true;
let f = 'Hello';
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
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 2));
//Void
function log(message) {
    // console.log(message);
}
log(2);
log('text');
const user1 = {
    id: 1,
    name: "John",
};
// type Point = number | string 
// const p1: Point = 1
user1.id = 2;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(123);
    }
}
const yal = new Person(1, 'Iyal');
const yul = new Person(2, 'Iyul');
console.log(yal, yul);
