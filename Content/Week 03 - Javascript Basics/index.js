// Types
// string
console.log("hello :3")
// number
console.log(7)
// boolean
console.log(true)
// null
console.log(null)
// undefined
console.log(undefined)
// array (aka list)
console.log(["apples", "bananas", "tomatoes"])
// object with key value pairs
console.log({
    name: "Jill",
    age: 20
})

// Variables
let name = "Jill"
console.log(name)
console.log("Hello", name)

let snack = "Pringles"
console.log(snack)
console.log(snack[0])

let house = {
    street: "sesame",
    cost: 120000,
    rooms:{
        bedrooms: 3,
        baths: 1.5
    }
}
console.log(house)
console.log(house["street"])
console.log(house.street)
console.log(house.rooms.baths)
let roomsInfo = house.rooms
console.log(roomsInfo.baths)

let grocery = ["rice", "potato", "egg", "chicken tenders"]
console.log(grocery)
console.log(grocery[1])

// Changing Values
snack = "oreos"
console.log(snack)

house["cost"] = 200000
console.log(house)

grocery[2] = "beans"
console.log(grocery)

// Operators
/*
== - check if value is equal
=== - check if value and type are equal
!= - not equal to value
!== - not equal to value and type
>,< - greater than less athen
>=,<= - greater than equal to, less than equal to
&& - and
|| - or
! - not
+,-,/,* - add, subtract, divide, multiply
++,-- - increment, decrement
+=, -= - short cut to add and subtract
*/

// Math
let apples = 10
apples = apples + 5
console.log("I have", apples, "apples")

apples+=3
console.log("I have", apples, "apples")

apples++
console.log("I have", apples, "apples")

// Concatenation
let firstName = "John"
let lastName = "Doe"
let fullName = firstName + " " + lastName

console.log("Good morning", fullName)

// Conditionals
let hungry = true
if(hungry==true){
    console.log("Order pizza")
}else{
    console.log("Watch tv")
}

let temp = 70

if(temp>80){
    console.log("too hot!")
}else if(temp>=60 && temp <=80){
    console.log("just right")
}else{
    console.log("too cold!")
}

let rainy = true
let snowy = false

if(rainy==true || snowy==true){
    console.log("put on a coat")
}