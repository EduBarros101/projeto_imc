// vaiáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal span')
const modalBtnClose = document.querySelector('.modal .close')

console.log('início do programa.')

form.onsubmit = (e) => {
  e.preventDefault(e)

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = calcIMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modalWrapper.classList.toggle('open')
  modalMessage.innerText = message
}

function calcIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

modalBtnClose.onclick = () => {
  modalWrapper.classList.toggle('open')
}
