export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal span'),
  buttonClose: document.querySelector('.modal .close'),

  open() {
    Modal.wrapper.classList.add('open')
  },

  close() {
    Modal.wrapper.classList.remove('open')
  },
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    Modal.close()
  }
})
