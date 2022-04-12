//Basic types
let id: number = 5;
// console.log('ID:', id);
let company: string = 'Mappa'
let isPublidhed: boolean = true
let f: any = 'Hello'
let age: number 
age = 20

let ids: number[] = [1,2,3,4,5,]
// ids.push(2)
let arr: any[] = [1, true, 'Hello']

//Tuple
let person: [number, string, boolean] = [1, 'hello', true]
//Tuple array
let employee:  [number, string][]
employee = [
  [1, "eren"],
  [2, "mikasa"],
  [3, "armin"],
];

//Union
let pid: string | number
pid = '22'

//Enum
enum Direction1 {
  Up = 'Up', Down = 'Down', Left = 'Left', Right = 'Right'
}

// console.log(Direction1.Left);

//Objects
type User = {
  id: number, 
  name: string
}

const user: User = { 
  id: 1, 
  name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

//Functions
function addNum(x: number, y: number): number{
  return x + y
}

// console.log(addNum(1, 2));

//Void
function log(message: string | number): void {
  // console.log(message);
}
log(2)
log('text')

// Interfaces
type UserInterface = {
  id: number
  name: string
  age?: number
};

const user1: UserInterface = {
  id: 1,
  name: "John",
};

// type Point = number | string 
// const p1: Point = 1

user1.id = 2

interface Mathfunc{
  (x: number, y: number): number
}

const add: Mathfunc = (x: number, y: number): number => x + y;
const sub: Mathfunc = (x: number, y: number): number => x - y;

//Classes