//arguments object - no longer bound with arrow functions

// const add = function (a, b) {
//     console.log(arguments)
//     return a + b
// }

const add = (a, b) => {
    //console.log(arguments)
    return a + b
}

console.log(add(4, 5, 100))

//this keyword - no longer bound

const user = {
    name: 'Linda',
    cities: ['Shanghai', "Melbourne"],
    printPlaceLived() {
        const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city)
        return cityMessages

        const that = this
        // this.cities.forEach(function (city) { //function is called for each item in cities
        //     //console.log(this.name + ' has lived in ' + city) //this is undefined 
        //     console.log(that.name + ' has lived in ' + city)
        // })
        this.cities.forEach((city) => { //function is called for each item in cities, 
            console.log(this.name + ' has lived in ' + city) //arrow function bound the this keyword value
            // console.log(that.name + ' has lived in ' + city)
        })
    }
}

const multiplier = {
    numbers: [1, 2, 3],
    multiplBy: 5,
    multiply() { return this.numbers.map((number) => number * this.multiplBy) }
}

console.log(user.printPlaceLived())

console.log(multiplier.multiply())