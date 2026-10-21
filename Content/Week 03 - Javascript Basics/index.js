// Functions

// No paramater, no return

function sayHello(){
    console.log("Hello")
}

sayHello()

// Yes parameter, no return

function sayHello2(name){
    let message = "Hello " + name
    console.log(message)
}

sayHello2("Jane")

function sayHello3(name){
    console.log("Hello", name)
    console.log("Hello "+name)
}

sayHello3("John")

// No paramter, yes return

function sayHello4(){
    let message = "Hello Jill"
    return message
}

let messageToJill = sayHello4()
console.log(messageToJill)

function sayHello5(){
    return "Hello Jack"
}

console.log(sayHello5())

// Yes paramter, yes return

function sayHello6(name){
    let message = "Hello " + name
    return message
}

sayHello6("Jane")

function sayHello7(name){
    return "Hello " + name
}

sayHello7("John")


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

let students = ["Jane", "John", "Jill", "Jack"]

for(let student in students){
    console.log(student)
}

// Loop an array using index

for(let i=0; i<students.length; i++){
    console.log(students[i])
}

// Loop an object

let house = {
    street: "sesame",
    price: 100000,
    rooms: 3,
    bathrooms: 1.5
}

for(let houseKey in house){
    console.log(houseKey)
    console.log(house[houseKey])
}

// Practice

// function with array

//Writa function that recieves a list of names returns a list of good night messages to each person in the list. 

// Function with object

