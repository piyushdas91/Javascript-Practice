console.log('Hello');
let ch = 5;

switch(ch) {
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    case 3:
        console.log('3');
        break;
    default:
        console.log('default');
}

function name(a, b){
    console.log(a + " " + 'I am Piyush.' + " " + b);
}

name('Hello', 'How are you?');

let sum = (a, b) => a + b;

console.log(sum(2, 3))

// primitve data type
//1. Number
let variable = 10

//2. String
let str = "Hello"

//3. boolean
let bool = false;

//4. null
let a = null;

//5. undefined
let b;

console.log(variable)
console.log(str)
console.log(typeof(bool))
console.log(a)
console.log(b);


// Type conversions in JS

result = '3' - undefined
console.log(result);
console.log(typeof(result))

result1 = 20.202
result1 = parseFloat(result1)
console.log(result1);
console.log(typeof(result1))

// Logic operator in JS
// AND, OR and NOT

console.log(4>3 && 3>4);
console.log(!(4==='4'));

// Functions

// Local and global variables

let global = 5;

function localCheck() {
    let local = 3;
    console.log('var = ' + global);
    console.log('var = ' + local);
}

localCheck()
//console.log('g =' + local);

// Types of functions
// Anonymous Functions

let fun = function() {
    console.log('anonymous function');
}
fun();
(function() {
    console.log('self invoked anonymous function');
})()

// Arrow function
let arrowFun = (a, b) => console.log('arrow function: ' + (a + b));
arrowFun(2,3)


// Arrays in JS
let array = ['John', 1, true, null]

// push at end
array.push('pushed at end');

// push at start
array.unshift('pushed at start');

// splice: syntax - splice(index to start from, number of items to delete, item to add in place)
array.splice(1,1, 'John');

console.log('array: ');
console.log(array);

// For each
let numArray = [10, 20, 30, 40, 50, 60]
numArray.forEach((val, index, array) => {
    console.log(val, index, array)
});

// For in and For of - for in prints index and for of prints value
// syntax: for(let ar in/of arr) {}