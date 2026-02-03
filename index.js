let person = {
    firstName: "John",
    Lastname: "Johnson",
    age: 20,
    car: "mercedes"
}

console.log(person.firstName)
console.log(person.Lastname)
console.log(person["age"])
console.log()


let person2 = {
    firstName: "John",
    Lastname: "Johnson",
    age: 20,
    car: [
        "mercedes",
        "audi",
        "ferrari"
    ],
    married: false,
    pet: {
        type: "cat",
        name: "john jr"
    }
}

person2.car.forEach(function(cars){
    console.log(cars)
})
console.log(person2.pet.type)
console.log(person2.pet.name)
