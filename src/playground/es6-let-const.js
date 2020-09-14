var nameVar = 'Linda'
var nameVar = 'Mike' //var can be redefined
console.log('nameVar:', nameVar)


let nameLet = 'Jen'
nameLet = 'James' //let can not be redefined
console.log('nameLet', nameLet)

const nameConst = 'John'
//nameConst = 'Authr'  //can not re-assignment to constant variable
console.log('nameConst', nameConst)


function getPetName() {
    let petName = 'Jal' //petName is function scope
    return petName
}
const petName = getPetName()
console.log("petName", petName)


//blocking scoping
const fullName = 'Andrew Mead'

if (fullName) {
    var firstName = fullName.split(' ')[0]  //firstName and fullName are function scoping, can access firstName  outside if statement
    //const firstName = fullName.split(' ')[0]   //const and let is blocking scoping, can not access outside the if statement
    console.log(firstName)
}

console.log(firstName)
