const withdrawAmount = document.getElementById('withdraw-amount')
const withdrawBtn = document.getElementById('withdraw-btn')
const error = document.getElementById('error')
const withdrawForm = document.getElementById('withdraw-form')

let withdrawBalance = 500
balance.innerText = withdrawBalance

withdrawForm.addEventListener('submit', e => {
  // if value is a negative

  if (Number(withdrawAmount.value) < 0) {
    e.preventDefault()
    error.innerText = 'withdraw amount must be greater than 0'
    withdrawAmount.value = ''
    withdrawBtn.setAttribute('disabled', true)
  }

  // if value is a number and greater than zero
  else if (
    typeof Number(withdrawAmount.value) === 'number' &&
    Number(withdrawAmount.value) > 0
  ) {
    e.preventDefault()
    withdrawBalance -= Number(withdrawAmount.value)
    balance.innerText = withdrawBalance
    withdrawAmount.value = ''
    withdrawBtn.setAttribute('disabled', true)
  }

  // if value is a not a number
  else if (typeof withdrawAmount.value === 'string') {
    e.preventDefault()
    error.innerText = 'withdraw amount must be a number'
    withdrawAmount.value = ''
    withdrawBtn.setAttribute('disabled', true)
  }
})
