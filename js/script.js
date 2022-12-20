import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calcIMC, notANumber, displayResultMessage } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

console.log('início do programa.')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = (e) => {
  e.preventDefault(e)

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calcIMC(weight, height)

  displayResultMessage(result)

  // as linhas abaixo foram adicionadas por mim porque fiquei incomodado com os valores permanecerem depois que o modal era fechado. E isso foi ótimo, porque eu me forcei a pesquisar como fazer o que eu precisava.

  // Abaixo: depois que o modal é aberto, o foco é setado para o botaão de fechar o modal, que está com a visibilidade do foco negada, porque, sem o foco, ao pressionar Enter, ele enviaria os valores, já zerados, do background e apresentaria erro NaN, e os valores são resetados para a próxima consulta.

  // Sorry, Uncle Bob. I'm still learning, so it's kinda usefull. :)
  Modal.buttonClose.focus({ focusVisible: false })

  inputHeight.value = ''
  inputWeight.value = ''
}
