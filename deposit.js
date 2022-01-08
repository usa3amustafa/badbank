const depositAmount = document.getElementById('deposit-amount')
const depositBtn = document.getElementById('deposit-btn')
const error = document.getElementById('error')
const depositForm = document.getElementById('deposit-form')

function isEmpty() {
  if (depositAmount.value !== '') {
    depositBtn.removeAttribute('disabled')
  } else if (depositAmount.value === '') {
    depositBtn.setAttribute('disabled', true)
  }
}

depositForm.addEventListener('submit', e => {
  // if value is a negative

  if (Number(depositAmount.value) < 0) {
    e.preventDefault()
    error.innerText = 'deposit amount must be greater than 0'
    depositAmount.value = ''
    depositBtn.setAttribute('disabled', true)
  }

  // if value is a number and greater than zero
  else if (
    typeof Number(depositAmount.value) === 'number' &&
    Number(depositAmount.value) > 0
  ) {
    e.preventDefault()
    error.innerText = 'deposit amount is number'
    depositAmount.value = ''
    depositBtn.setAttribute('disabled', true)
  }

  // if value is a not a number
  else if (typeof depositAmount.value === 'string') {
    e.preventDefault()
    error.innerText = 'deposit amount must be a number'
    depositAmount.value = ''
    depositBtn.setAttribute('disabled', true)
  }
})
