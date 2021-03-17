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

  window.onscroll = () =>  {
    let top =   window.pageYOffset || document.documentElement.scrollTop

    if(top > 100) {
      nav.classList.add("white__nav", "box__shadow")
    } else {
      nav.classList.remove("white__nav", "box__shadow")
    }
  }

  function observeComponenets(direction) {
    for(let _i of document.querySelectorAll(`.appear-from-${direction}`)) {
      let _delay = _i.getAttribute('slide-delay') || 125

      let observer = new IntersectionObserver(e => {
        if(e[0].isIntersecting) {
          if(!_i.state) {
            _i.state = true

            let _style = _i.style
            _style.animation = `appear-${direction} 0.5s ease forwards ${_delay}ms`
            if(observer) observer.unobserve(_i)
          }
        }
      })

      if(observer) observer.observe(_i)
    }
  }

  observeComponenets('up')
  observeComponenets('left')

})
