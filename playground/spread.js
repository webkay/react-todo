// function add (a, b) {
//   return a + b
// }

// console.log(add(3,1))


// var toAdd = [9,5]
// console.log(add(...toAdd))

// var groupA = ['Jim', 'Cody']
// var groupB = ['Vince']

// var final = [...groupB, 3, ...groupA]

// console.log(final)

var person = ['Andrew', 25]
var personTwo = ['Johnson', 29]
// Hi Andrew, you are 25

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age)
}

greet(...person)
greet(...personTwo)

var names = ['Mike', 'Ben']
var final = ['Andrew', ...names]
// Hi Andrew

final.forEach((name) => {
  console.log('Hi ' + name)
})
