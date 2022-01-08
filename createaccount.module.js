// create account btn
const userName = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const createAccountBtn = document.getElementById('createaccountbtn')
const createAccountForm = document.getElementById('createaccountform')
const createAccountError = document.getElementById('error')

let arrInfo = []

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
  } else if (password.value.length < 8 || password.value === null) {
    e.preventDefault()
    createAccountError.textContent = 'Password must be 8 charectors long'
    userName.value = ''
    email.value = ''
    password.value = ''
    createAccountBtn.setAttribute('disabled', true)
  } else {
    e.preventDefault()
    arrInfo.push(userName.value, email.value, password.value)
    localStorage.setItem('account', JSON.stringify(arrInfo))

    alert('A New Account has been created successfully')
    userName.value = ''
    email.value = ''
    password.value = ''
    createAccountBtn.setAttribute('disabled', true)
  }
})
