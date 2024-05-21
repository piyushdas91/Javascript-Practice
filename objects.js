// Objects

const obj = {
    "name": "Piyush",
    "age": 26,
    "last name": "Das",
    fun: function() {
        console.log('Function in Object');
    },
    arr: [10, 20, 30]
}
obj.key = "item"
// console.log(obj["last name"]);

for (let i in obj){
    console.log(obj[i]);
}

// objects in array

let arr = [
    {user:1, name: "Piyush"},
    {user:2, name: "Pratyush"},
    {user:3, name: "Deepa"},
    {user:4, name: "Sitesh"},
];

console.log(arr[0]);

for(let i in arr) {
    console.log(arr[i].name);
}

let [item1, item2, {name}, {name: name1}] = arr;
console.log(item1)
console.log(item2)
console.log(name)
console.log(name1)

// ojects with functions and function inside function
// Lexical Scope

function fun () {
    var a = 1;
    console.log('Function 1 ', a);
    
    function fun2() {
        var a = 2;
        console.log('Function 2 ', a);
    }
    fun2();
}

fun();

// Debugger
function loop(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
}
loop();

// Sets

const set = [10, 20, 30, 40, 50];
const s = new Set([10,20,30,30])
s.add(40);
console.log('arr', set);
console.log('set', s);

// Maps

var map1 = new Map([[1, "one"], ["name", "Piyush"], ["array", [1,2,3]]])
console.log(map1);
console.log(map1.get("name"));

var k = map1.keys();
for(var key of k){
    console.log(key);
}

var map2 = new Map();
map2.set("Hello", "World");
console.log(map2);

// This keyword

var thisObj = {
    fname: "Piyush",
    age: 26,
    fun: function(){
        console.log(this.age);
    }
}

thisObj.fun()

// this keyword points to window object if used outside an object

// New keyword

function new1 () {
    let fname = "Piyush";
    this.fname = fname;
}

var object = new new1();
console.log(object.fname);

// Constructor

function User(name) {
    this.name = name; 
}
let person = new User("Piyush Das")
console.log(person.name)

// Symbol => Unique identifier
// hidden property

let sym = Symbol("id");
let sym1 = Symbol("id");
console.log(sym === sym1);

let id = Symbol("id");
let obj1 = {
    name: "Piyush Das",
    age: 26,
}
obj1[id]=0;
console.log(obj1);

for(let key in obj1) {
    console.log(key);
}

// Proto

// function Person(name, age) {
//     let person = Object.create(obj4);
//     person.name = name;
//     person.age = age;
//     return person;
// }

// var obj4 = {
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// let user = Person('Piyush', 26);
// user.greet()
// console.log(user);

// Class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet () {
        console.log(`Hello ${this.name}`);
    }
 }

 let user = new Person('Piyush', 26);
user.greet()
console.log(user);

