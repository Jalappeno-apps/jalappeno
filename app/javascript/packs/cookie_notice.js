const cookieContainer = document.getElementById('cookie-container')

if (localStorage.cookie != 1 && cookieContainer) {
  const closeCookieBtn = document.getElementById('close-cookie')
  const pixels = Array.from(document.getElementsByClassName('pixels'))

  // Create small pixels in the cookie notice
  const colours = ['4AEE9C', '1DE37F', '33EEBB', '31FAAE']
  for(let _i = 0 ; _i < 5 ; ++_i) {
    let node = document.createElement('div')
    node.className = 'pixels'

    let style = node.style
    let randomColour = colours[Math.floor(Math.random() * colours.length)]

    style.backgroundColor = `#${randomColour}`
    style.padding = `${Math.floor(Math.random() * 6) + 2}px`
    style.top = `${Math.random() * 100}%`
    style.left = `${Math.random() * 100}%`

    cookieContainer.appendChild(node)
  }

  if (closeCookieBtn) {
    closeCookieBtn.onclick = function() {
      cookieContainer.style.animation = 'fade-out 1.5s ease forwards'

      setTimeout(() => {
        if (cookieContainer) document.body.removeChild(cookieContainer)
        localStorage.cookie = 1
      }, 3000)
    }
  }
} else if (cookieContainer) {
  // Remove the cookieContainer if it's previously dismissed by the user
  document.body.removeChild(cookieContainer)
}
