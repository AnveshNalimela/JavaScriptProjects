//Objects decalrtion
const person = {
    name: "elon",
    age: 12,
    lastName: "Musk"
}

console.log(person)
console.log(typeof person)
//key:value is called  properties
console.log(person.name)
console.log(person.age)
console.log(person.lastName)

//Second way of accesing
console.log(person["name"])
console.log(person["lastName"])
console.log(person["age"])

//update
person.age = 50;
console.log(person.age)

//addition of new property
person.company = "spacex"
console.log(person)

//deleting the peopetry
delete person.company
console.log(person)

//nested objects
const person_nested = {
    name: "John",
    age: 12,
    ed: {
        ssc: 90,
        inter: 99,
        btech: 8.8,
    }
}

console.log("age" in person_nested)
console.log("comapny" in person_nested)

for (let prop in person) {
    console.log(prop + ":" + person[prop])

}

//Other ways of creating the object in js
const person_new = new Object();
person_new.name = "Jhon";
person_new.age = 34;
console.log(person_new)

//Another way
const person_new_def = new Object({
    name: 'Alex',
    age: 23,
    class: "educator"
})
console.log(person_new_def)

//java script object models
const person_obj = {
    firstName: "nalimela",
    lastName: "anvesh",
    greet: function () {
        console.log("hello wolrd " + this.firstName)
    },
    getFullName: function () {
        return this.firstName + this.lastName

    }
}

person_obj.greet()
console.log(person_obj.getFullName())

//Other way to add func
const person_wf = {
    firstName: "John",
    lastName: "walker",
};

function greet() {
    console.log("hello walker")
}
person_wf.greet = greet()

console.log(person_wf)


// deafult constructor function
function Person() {
    this.lastName = "varma",
        this.firstName = "anvesh"
}
const person1 = new Person();
const person2 = new Person();
console.log(person1)
console.log(person2)


//parametrized constructor
function Person1(a, b) {
    this.lastName = a,
        this.firstName = b
}
const person11 = new Person1("sid", "kua");
const person22 = new Person1("rea", "rem");
console.log(person11)
console.log(person22)

//javascript Object propotype
function Person_prop(fname, lname) {
    this.firstName = fname,
        this.lastName = lname
}

Person_prop.prototype.gender = "Male"
const person111 = new Person_prop("sid", "ku3a");
const person222 = new Person_prop("rea", "reyyfm");

console.log(person111)
console.log(person111.gender)
console.log(person222)

const person_des = {
    firstName: "Elon",
    lastName: "Musk",

}
console.log(person_des)

let { firstName: fname, lastName: lname } = person;
console.log(typeof person)

let { fisrtName, lastName } = person1;
console.log(person1);


