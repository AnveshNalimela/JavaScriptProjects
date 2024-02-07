document.write("Welcome to Anvesh World")
console.log("Welcome to Anvesh World")
//var can be chnaged
var a = 10;
var a = 20;
console.log(`a:${a}`)
//let assinged for local instance
let arr = "hello world";
console.log(`a:${arr}`)
//Const cannot changed
const b = 10;
console.log(b)

var x = "hello anvesh";
console.log("global scope message");
function example() {
    console.log("Inside the function")
    console.log(`message:${x}`)
}
console.log("outside  the function")
console.log(`message:${x}`)
example()


console.log("function scope message");
function example() {
    var y = "hello anvesh inside";
    console.log("Inside the function")
    console.log(`message:${y}`)
}
console.log("outside  the function")
//console.log(`message:${y}`)
example()

//block scope
console.log("Block scope")
function func() {
    if (true) {
        let z = 'I am block scoped';
        console.log(z)
    } else {
        console.log(z)

    }
}
func()


//Function()
const hello = "Hello World";
const prinHello = (name) => {
    console.log(`message : ${name}`)
}
prinHello(hello)


//DataTypes
//Strings
let firstName = "Nalimela";
let lastName = "Anvesh";
console.log(firstName + lastName);

//Number 
let e = 10;
console.log(typeof e)

//Boolean datatypes
let learning = true;
console.log(learning);
console.log(typeof learning)

let t = 20 > 45;
console.log(t);
console.log(typeof t)

//undefined datatypes
let u;
console.log(u);
console.log(typeof u)

//null
let nulled = null;
console.log(nulled);
console.log(typeof nulled)

//euality bw null and undefined
console.log("Equality of null and undefined");
console.log(null === undefined);

//refernce datatype :object can holds any type of dataypes
let person = {
    age: 12,
    name: "Anvesh",
    id: 234,
    education: {
        inter: 89,
        btech: 7.9
    }

}
console.log(person)
console.log(typeof person)

//Array datatype in java Script

let array = [2, 5, 6, 78, 89];
console.log(array);
console.log(typeof array);
function display() {
    for (let i = 0; i < array.length; i++) {
        console.log(`array[${i}]:${array[i]}`)
    }
}
console.log(array.length)
display();

//function datatype
function msg() {
    console.log("hello")
}
console.log(typeof msg);
msg();

//Operators in java Script
//arithmetic operators
var sum = 3 + 5
console.log(sum);
sum = 3 - 5
console.log(sum);
sum = 3 * 5
console.log(sum);
sum = 3 / 5
console.log(sum);
sum = 3 % 5
console.log(sum);
sum = 3 ** 5
console.log(sum);

//Assingment operators
var x = 5;
console.log(x)
x += 3
console.log(x)
x -= 2
console.log(x)
x *= 4
console.log(x)
x /= 1.5
console.log(x)

//Increament and decremanet operator
let y = 9
console.log(++y)
console.log(y++) //post increment
console.log(y)
console.log(y--)
console.log(--y)

//Comparison operators
var num1 = 5, num2 = 10;
console.log(num1 > num2)
console.log(num1 >= num2)
console.log(num1 < num2)
console.log(num1 <= num2)
num1 = 10
num2 = '10'

console.log(num1 == num2) //true
console.log(num1 != num2) //false
console.log(num1 === num2) //false
console.log(num1 !== num2)//true

//Logical operators
var a = true;
var c = false;
console.log(a && c)
console.log(a || c)
console.log(!a)

