123 == 123
123 == '123'

123 === 123
123 === '123'

var a
var b = null

a === b
a == b

a == null
b == null

true == true
false == false
true == false

1 == true // truthy
0 == false // falsy
'' == false // falsy
' ' == false // falsy
'foo' == false // truthy


for (let i = 0; i < 3; i++) {
  console.log(i)
}

for (let i = 0; i <= 5; i+=2) {
  console.log(i)
}


const person = {
  firstName: 'Felipe',
  lastName: 'Andrade',
  age: 28
}

for (const key in person) {
  console.log(key)
}


const phones = ['+55 11 98765-4321', '+55 11 91234-5678']

for (const value of phones) {
  console.log(value)
}

for (const key in phones) {
  console.log(key)
}

// Tudo em JS é um objeto!


let count = 0

while (count < 5) {
  console.log(count)
  count++
}


let count = 1

do {
  console.log(count)
  count--

} while (count > 0)


let count = 0

do {
  console.log(count)
  count--

} while (count > 0)


let count = 0

while (count > 0) {
  console.log(count)
  count--
}
