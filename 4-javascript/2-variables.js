var a = 10
a = 'Felipe'

let b = 10
b = 'Felipe'

const c = 10
c = 'Felipe' // error

d = 10
d = 'Felipe'


function myFunc() {
  var a = 111
  let b = 222
  const c = 333
  d = 444

  console.log(a, b, c, d)
}

function myFunc() {
  'use strict'

  var a = 111
  let b = 222
  const c = 333
  d = 444

  console.log(a, b, c, d)
}

for (var i = 1; i <= 3; i++) {
  console.log(i)
}

console.log(i) // function scope


for (let i = 1; i <= 3; i++) {
  console.log(i)
}

console.log(i) // block scope


const arr = ['foo', 'bar']
arr[0]
arr[1] = 'john'
arr[2] = 'doe'
arr.push('baz')
arr.pop()

const arr = [123, 'Hi', true, { myKey: 'my value'}]


const person = {
  name: 'Felipe',
  age: 28,
  phones: ['+55 11 98765-4321', '+55 11 91234-5678'],
  address: {
    street: 'Rua Mochileiro das Galáxias',
    number: 42
  }
}

console.log(obj.name)
console.log(obj['name'])


const obj = {
  123: 'foo'
}

console.log(obj.123)
console.log(obj['123'])


const myKey = 'some_key'
const obj = {
  [myKey]: 'some value'
}

console.log(obj.some_key)
console.log(obj[key])
