// create account btn
const userName = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const createAccountBtn = document.getElementById('createaccountbtn')
const createAccountForm = document.getElementById('createaccountform')
const createAccountError = document.getElementById('error')

let containsData = false

if (localStorage.getItem('account') !== null) {
  createAccountBtn.innerText = 'Create Another Account'
} else {
  createAccountBtn.innerText = 'Create Account'
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
  } else if (password.value.length < 8 || password.value === null) {
    e.preventDefault()
    createAccountError.textContent =
      'Password must be atleast 8 charectors long'
    userName.value = ''
    email.value = ''
    password.value = ''
    createAccountBtn.setAttribute('disabled', true)
  } else {
    e.preventDefault()

    if (localStorage.getItem('account') !== null) {
      const data = JSON.parse(localStorage.getItem('account'))
      data.push(userName.value, email.value, password.value)
      localStorage.setItem('account', JSON.stringify(data))
    } else {
      const data = []
      data.push(userName.value, email.value, password.value)
      localStorage.setItem('account', JSON.stringify(data))
      containsData = true
      if (containsData) {
        createAccountBtn.innerText = 'Create Another Account'
      } else {
        createAccountBtn.innerText = 'Create Account'
      }
    }

    alert('A New Account has been created successfully')
    userName.value = ''
    email.value = ''
    password.value = ''
    createAccountBtn.setAttribute('disabled', true)
  }
})
