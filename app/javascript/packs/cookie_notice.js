const cookieContainer = document.getElementById('cookie-container')
const closeCookieBtn = document.getElementById('close-cookie')

if (localStorage.cookie == 1 && cookieContainer)
  document.body.removeChild(cookieContainer)

if (closeCookieBtn) {
  closeCookieBtn.onclick = function() {
    cookieContainer.style.animation = 'fade-out 1.5s ease forwards'

    setTimeout(() => {
      if (cookieContainer)
        document.body.removeChild(cookieContainer)

      localStorage.cookie = 1
    }, 2000)
  }
}
