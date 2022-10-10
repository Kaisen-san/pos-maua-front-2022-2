console.log(a)
var a = 123

console.log(a)

// Hoisting
var a
console.log(a)
a = 123

console.log(b)
let b = 123 // não tem hoisting


console.log(sayHello('Felipe'))

function sayHello(name) {
  console.log('Olá, ' + name + '!')
  // console.log(`Olá, ${name}!`)
}

// Hoisting
function sayHello(name) {
  console.log(`Olá, ${name}!`)
}

console.log(sayHello('Felipe'))


for (var i = 0; i < 3; i++) {
  console.log(i)
}

// Hoisting
var i
for (i = 0; i < 3; i++) {
  console.log(i)
}
