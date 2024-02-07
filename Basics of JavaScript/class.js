class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    greet() {
        console.log("hello " + this.name)
    }
    changeName(newName) {
        this.name = newName;
    }
    get getgreet() {
        return "hello " + this.name
    }
    set setchangeName(newName) {
        this.name = newName;
    }


}

const person1 = new Person("elon musk", 23);
console.log(person1)
person1.greet()
person1.changeName("arey elon")
console.log(person1.name)

console.log(person1.getgreet)

person1.setchangeName = "arey elon pumka"
console.log(person1.getgreet)

//Inhertinace
class Person_in {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    greet() {
        console.log("hello " + this.name)
    }
    changeName(newName) {
        this.name = newName;
    }
}

class Student extends Person_in {
    constructor(name, age, grade) {
        super(name, age)// calling the parent class constructor and passing the given args
        this.grade = grade
    }
}
const student1 = new Student("peter", 12, 8.9)
console.log(student1)

//Ststic methods
class Person_static {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    #greet() {
        console.log("hello " + this.name)
    }
    static greet_st() {
        console.log("Hello everyone")
    }

}
Person_static.greet_st();
const per1 = new Person_static("anvesh", 12)
per1.greet()



