// Functions

// No paramater, no return

function sayHello(){
    console.log("Hello")
}

sayHello()

// Yes paramter, yes return

function goodMorning(firstName, lastName){
    let message = "Good morning " + firstName + " " + lastName
    return message
}

let messageToJill = goodMorning("Jill","Valentine")
console.log(messageToJill)

// Arrays

let ingredients = ["Bacon", "Lettuce", "Tomato"]
console.log(ingredients)

// Reference value by index

console.log(ingredients[0])

// Add to start or end

ingredients.push("pickles")
ingredients.unshift("mayonaise")
console.log(ingredients)

// modify values

ingredients[0] = "ketchup"
console.log(ingredients)

// Objects

let student = {
    id: "12345",
    name: "Jill",
    age: 20,
}
console.log(student)

// Reference by key name

console.log(student["age"])
console.log(student.age)

// Add or modify key value pairs

student["class"] = "pe"
student.grade = "A+"
console.log(student)

// Remove key value pair

delete student.grade
console.log(student)

// Loops


// While Loop

let catFed = 0

while(catFed<3){
    console.log("feed cat")
    catFed++
}

// Loop an array 

let tomatoBags = [5,6,4,5,4]
let total = 0

for(let index in tomatoBags){
    let tomatoBag = tomatoBags[index]
    total = total + tomatoBag
    console.log(tomatoBag)
}

console.log("total:", total)

// Loop an array using index

let students = ["Jane", "John", "Jill", "Jack"]

for(let i=0; i<students.length; i++){
    console.log(students[i])
}

// Modify an existing array

for(let index in students){
    students[index]+="!"
}
console.log(students)

// Add to an empty array 

let firstLetters = []

for(let index in students){
    studentName = students[index]
    letter = studentName[0]
    firstLetters.push(letter)
}
console.log(firstLetters)

// Loop an object

let house = {
    address: "sesame 123",
    price: 100000,
    rooms: 3,
    bathrooms: 1.5
}

for(let key in house){
    console.log(key)
    console.log(house[key])
}

let house2 = {
    address: "evergreen 123",
    price: 200000,
    rooms: 5,
    bathrooms: 2.5 
}

let house3 = {
    address: "cool 123",
    price: 150000,
    rooms: 4,
    bathrooms: 2
}

let houses = [house, house2, house3]

console.log(houses)

for(let index in houses){
    let house = houses[index]
    console.log(house.price)
}

// Modify an array of objects

for(let index in houses){
    let house = houses[index]
    house.price+=1000
}

console.log(houses)