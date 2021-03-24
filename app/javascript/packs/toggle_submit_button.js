const submitButton = document.getElementById('submitButton')
const buttonId = submitButton.getAttribute('button-id')
const button = document.getElementById(buttonId)
const attributes = button.getAttribute('toggle-class').split(' ')

const mandatoryFields = Array.from(document.getElementsByClassName('required'))

const fullname = document.getElementById('fullName')
const email = document.getElementById('email')
const phone = document.getElementById('inputPhone')
const message = document.getElementById('message')

for (let i of mandatoryFields) {
  i.addEventListener('input', function() {
    if (this.value.trim() !== '' && submitButton.checked) {
      buttonStateToggler()
    } else if (this.value.trim() === '') {
      buttonDisable()
    }
  })
}

const buttonStateToggler = () => {
  let enabled = true

  // The email check done is simple here, the rest is also handled by
  // the browser
  if(
    email.value.length < 5 || email.value.length > 100 ||
    !email.value.match(/^.+@.+\..+$/) ||
    fullname.value.length < 3 || fullname.value.length > 100 ||
    message.value.length < 10 || message.value.length > 10000 ||
    !phone.value.match(/^\+*\d{8,14}$/)
  ) {
    enabled = false
  } else {
    for (let r of mandatoryFields) {
      if (r.value.trim() === '') {
        enabled = false
        break
      }
    }
  }

  enabled ? buttonEnable() : buttonDisable()
}

const buttonEnable = () => {
  button.classList.remove('button-disabled')
  button.classList.add(...attributes)
  button.disabled = false
}

const buttonDisable = () => {
  button.classList.add('button-disabled')
  button.classList.remove(...attributes)
  button.disabled = true
}

const toggleButton = e => {
  (button && e) ? buttonStateToggler() : buttonDisable()
}

submitButton.onclick = function() {
  toggleButton(this.checked)
}

toggleButton(submitButton.checked)
