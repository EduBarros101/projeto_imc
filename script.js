// vaiáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal span'),
  buttonClose: document.querySelector('.modal .close'),

  open() {
    Modal.wrapper.classList.toggle('open')
  },

  close() {
    Modal.wrapper.classList.toggle('open')
  },
}

console.log('início do programa.')

form.onsubmit = (e) => {
  e.preventDefault(e)

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = calcIMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

function calcIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}
