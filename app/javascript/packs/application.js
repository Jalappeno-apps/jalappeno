// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

document.addEventListener('turbolinks:load', function() {
  const nav = document.querySelector("nav")

  styleNavbar = function() {
    let top =   window.pageYOffset || document.documentElement.scrollTop

    if(top > 100) {
      nav.classList.add("white__nav", "box__shadow")
    } else {
      nav.classList.remove("white__nav", "box__shadow")
    }
  }

  window.onscroll = () =>  styleNavbar()
  styleNavbar()

  function observeComponents(direction) {
    for(let _i of document.querySelectorAll(`.appear-from-${direction}`)) {
      let _delay = _i.getAttribute('slide-delay') || 250

      _i.observer = new IntersectionObserver(e => {
        if(e[0].isIntersecting) {
          if(!_i.observed) {
            _i.observed = true
            _i.style.animation = `appear-${direction} 1s ease forwards ${_delay}ms`
            if(_i.observer) _i.observer.unobserve(_i)
          }
        }
      })

      _i.observer.observe(_i)
    }
  }

  observeComponents('up')
  observeComponents('down')
  observeComponents('right')
  observeComponents('left')

  // Toggle disabled submit button
  const mandatoryFields = Array.from(document.getElementsByClassName('required'))
  // console.log(mandatoryFields)

  const submitButton = document.getElementById('submitButton')
  const buttonId = submitButton.getAttribute('button-id')
  const button = document.getElementById(buttonId)
  const attributes = button.getAttribute('toggle-class').split(' ')


  for (let i of mandatoryFields) {
    i.addEventListener('input', function() {
      console.log(this.value)

      if (this.value.trim() !== '' && submitButton.checked) {
        buttonEnabler()
      } else if (this.value.trim() === '') {
        buttonDisabler()
      }
    })
  }

  window.toggleSendButtonState =  function() {
  }

  const buttonEnabler = () => {
    let enabled = true

    for (let r of mandatoryFields) {
      if (r.value.trim() === '') {
        enabled = false
        break
      }
    }

    if(enabled) {
      button.classList.remove('button-disabled')
      button.classList.add(...attributes)
    }
  }

  const buttonDisabler = () => {
    button.classList.add('button-disabled')
    button.classList.remove(...attributes)
  }

  toggleButton = e => {
    if (button && e)
      buttonEnabler(attributes)
    else
      buttonDisabler(attributes)
  }

  submitButton.onclick = function() {
    toggleButton(this.checked)
  }

  toggleButton(submitButton.checked)
})
