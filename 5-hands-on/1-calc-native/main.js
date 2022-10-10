(() => {

function toInt(value) {
  const result = parseInt(value)
  return isNaN(result) ? 0 : result
}

function enter(evt) {
  if (evt.key === 'Enter') {
    resInput.value = toInt(numInput.value)
    numInput.value = ''
  }
}

function add() {
  const result = toInt(resInput.value)
  const number = toInt(numInput.value)

  resInput.value = result + number
  numInput.value = ''
  numInput.focus()
}

function sub() {
  resInput.value = toInt(resInput.value) - toInt(numInput.value)
  numInput.value = ''
  numInput.focus()
}

function mult() {
  resInput.value = toInt(resInput.value) * toInt(numInput.value)
  numInput.value = ''
  numInput.focus()
}

function div() {
  resInput.value = toInt(resInput.value) / toInt(numInput.value)
  numInput.value = ''
  numInput.focus()
}

function clear() {
  resInput.value = ''
  numInput.value = ''
  numInput.focus()
}

const numInput = document.getElementById('num_input')
const resInput = document.getElementById('res_input')
const addBtn = document.getElementById('add_btn')
const subBtn = document.getElementById('sub_btn')
const multBtn = document.getElementById('mult_btn')
const divBtn = document.getElementById('div_btn')
const clrBtn = document.getElementById('clr_btn')

numInput.addEventListener('keyup', enter)
addBtn.addEventListener('click', add)
subBtn.addEventListener('click', sub)
multBtn.addEventListener('click', mult)
divBtn.addEventListener('click', div)
clrBtn.addEventListener('click', clear)

})()
