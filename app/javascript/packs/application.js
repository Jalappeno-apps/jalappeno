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
  // #1 Toggle white navbar, and Shadow
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
  // #1 End of Toggle white navbar, and Shadow

  // #2 IntersectionObserver
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

  // #2 End of IntersectionObserver
})
