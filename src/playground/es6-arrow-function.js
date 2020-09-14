const square = function (x) {
    return x * x
}

// const squareArrow = (x) => {
//     return x * x
// }
const squareArrow = (x) => x * x  //return a single value

console.log(square(4))
console.log(squareArrow(10))

const getFirstName = (fullName) => fullName.split(' ')[0]

console.log(getFirstName('James Wang'))
