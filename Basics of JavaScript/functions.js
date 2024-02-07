//Function def
function greet() {
    console.log("Hello World");
}
greet()

function greet(firstName = "default") {
    console.log("Hello World");
    console.log(firstName)
}
greet("anvesh")
greet("anvesh", "varms")
greet()


function add(a, b) {
    console.log("before return")
    return a + b;
    console.log("after return")
}

const res = add(12, 45);
console.log(res);


//callback function
function display(res) {
    console.log(res)
}
function d1(num1, num2, mycall) {
    let sum = num1 + num2;
    mycall(sum);

}
d1(12, 23, display);

//anyonums functions
let sum = function (a, b) {
    return a + b
}
console.log(sum(9, 8))

setTimeout(function () {
    console.log('This is from setTimeout')
}, 1000)

//recrusive function 
function myfact(n) {
    if (n == 1) {
        return 1

    } else {
        return myfact(n - 1) * n
    }
}
console.log(myfact(5))



