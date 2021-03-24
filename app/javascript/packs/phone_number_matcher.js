const phone = document.getElementById('inputPhone')
const phoneMatcher = /^\+*\d{8,14}$/

if (phone) {
  let phoneStyle = phone.style

  phone.addEventListener('input', function() {
    phoneStyle.color = phoneNumberValidate(this.value) ? '#000' : '#f55'
  })
}

window.phoneNumberValidate = function(n) {
  return n.match(phoneMatcher)
}
