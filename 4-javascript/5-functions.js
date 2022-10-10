function sayHi(firstName, lastName) {
  console.log(`Hi, ${firstName} ${lastName}`)
}

const sayHi = function(firstName, lastName) {
  console.log(`Hi, ${firstName} ${lastName}`)
}


function multiply(num, mult) {
  return num * mult
}

function double(num) {
  return multiply(num, 2)
}


// HOF - High Order Functions

function incrementBy(increment) {
  return function(num) {
    return num + increment
  }
}

const addTwo = incrementBy(2)

addTwo(1)


const calc = function(op, x, y) {
  return op(x, y)
}


const calc = function(op, ...values) { // rest parameters
  return op(...values) // spread operator
}


// Closure - Função + ambiente léxico (contexto quando função foi definida)

function pureFunc(x, y) {
  return x + y
}

console.dir(pureFunc)


const y = 3

function impureFunc(x) {
  return x + y
}

console.dir(impureFunc)

console.dir(addTwo)


// Arrow functions

const sayHi = (firstName, lastName) => {
  console.log(`Hi, ${firstName} ${lastName}`)
}

const multiply = (num, mult) => {
  return num * mult
}

const multiply = (num, mult) => num * mult


const person = {
  firstName: 'Felipe',
  lastName: 'Andrade',
  fullName: function() {
    return `${this.firstName}  ${this.lastName}`
  }
}


// Qualquer que seja o `this` aqui...
const person = {
  firstName: 'Felipe',
  lastName: 'Andrade',
  fullName: () => {
    return `${this.firstName}  ${this.lastName}` // ...será o `this` aqui.
  }
}


const person = {
  firstName: 'Felipe',
  lastName: 'Andrade',
  log() {
    console.log(this)
  }
}


const person = {
  firstName: 'Felipe',
  lastName: 'Andrade',
  log() {
    setTimeout(function() {
      console.log(this)
    }, 100)
  }
}


const person = {
  firstName: 'Felipe',
  lastName: 'Andrade',
  log() {
    const self = this
    setTimeout(function() {
      console.log(self)
    }, 100)
  }
}


const person = {
  firstName: 'Felipe',
  lastName: 'Andrade',
  log() {
    setTimeout(function() {
      console.log(this)
    }.bind(this), 100)
  }
}


const person = {
  firstName: 'Felipe',
  lastName: 'Andrade',
  log: () => {
    console.log(this)
  }
}


// Desafio - Quais serão os valores de i exibidos no console para cada for abaixo?

for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i)
  }

  setTimeout(log, 100)
}


for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i)
  }

  setTimeout(log, 100)
}


debugger // use isso para pausar o for e entender o que está acontecendo
