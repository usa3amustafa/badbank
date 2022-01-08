// create account btn
const userName = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const createAccountBtn = document.getElementById('createaccountbtn')
const createAccountForm = document.getElementById('createaccountform')
const createAccountError = document.getElementById('error')

function isEmpty() {
  if (userName !== '' || email !== '' || password !== '') {
    createAccountBtn.removeAttribute('disabled')
  } else if (userName === '' || email === '' || password === '') {
    createAccountBtn.setAttribute('disabled', true)
  }
}

// create account validations
createAccountForm.addEventListener('submit', e => {
  if (userName.value === '' || userName.value === null) {
    e.preventDefault()
    createAccountError.textContent = 'User Name cannot be blank'
    userName.value = ''
    email.value = ''
    password.value = ''
    createAccountBtn.setAttribute('disabled', true)
  } else if (email.value === '' || email.value === null) {
    e.preventDefault()
    createAccountError.textContent = 'Email cannot be blank'
    userName.value = ''
    email.value = ''
    password.value = ''
    createAccountBtn.setAttribute('disabled', true)
  } else if (password.value === '' || password.value === null) {
    e.preventDefault()
    createAccountError.textContent = 'Password cannot be blank'
    userName.value = ''
    email.value = ''
    password.value = ''
    createAccountBtn.setAttribute('disabled', true)
  }
})
