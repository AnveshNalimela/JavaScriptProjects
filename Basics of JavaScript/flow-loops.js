//conditonal statements
//if else statement
let x = 50;
let y = 23;
if (x > y) {
    console.log("If block getting executed")
} else {
    console.log("elses block is executed")
}

//if -else stmts
if (x > y && x > 10) {
    console.log("if block")
} else {
    console.log("else block")
}

//else if
let age = 14;
if (age >= 18) {
    console.log("you are adult")
} else if (age > 14) {
    console.log("you are teenager");
} else {
    console.log("ypu are akid")
}

//Switch statmets 
let day = 4;
switch (day) {
    case 1:
        console.log("sun")
        break;
    case 2:
        console.log("mon")
        break;
    case 3:
        console.log("tue")
        break;
    case 4:
        console.log("wens")
        break;
    default:
        console.log("enter a num bw 1 to 7")
}

//Ternary operator
//conditon? true stmts :false stmts;
var num = 0;
true && false ? num = 12 : num = 24;
console.log("num:" + num)

//Loops 
//For loop
for (let i = 0; i < 3; i++) {
    console.log(i);
}

let arr = ["c", "c++", "py"]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let i = 1; i <= 3; i++) {
        console.log("inner loop :" + i);
    }
}

//While loop
let ageof = 12;
while (ageof < 18) {
    console.log("You have to wait for :" + (18 - ageof) + "years")
    ageof++

}


//java Script break 
for (let i = 0; i <= 6; i++) {
    console.log(i);
    if (i == 4) {
        break
    }
}
//continue key word
for (let i = 0; i <= 6; i++) {
    if (i == 4) {
        continue
    }
    console.log(i);
}

