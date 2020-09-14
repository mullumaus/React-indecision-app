//car
class Person {
    constructor(name = 'James', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hello. I am ${this.name}`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major = '') {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let descrption = super.getDescription()
        if (this.hasMajor) {
            descrption += `major in ${this.major} `
        }
        return descrption
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}`
        }
        return greeting
    }
}

const me = new Traveller('Linda', 40, 'SHanghai')
console.log(me.getGreeting())
//console.log(me.getDescription())