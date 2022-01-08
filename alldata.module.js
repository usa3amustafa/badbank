const data = localStorage.getItem('account')

const data2 = data.slice(1, -1)

let arr = []

for (let i = 0; i <= data2.split(',').length; i += 3) {
  arr = [data2.split(',')]
}

arr.forEach(function (el) {
  const container = document.getElementById('all-data-body')

  for (let i = 0; i < el.length; i += 3) {
    const html = `
      <div class = "data d-flex">
        <p class = "p-3 w-25 border-end">${el[i].slice(1, -1)}</p>
        <p class = "p-3 w-50 border-end">${el[i + 1].slice(1, -1)}</p>
        <p class = "p-3 w-25 border-1">${el[i + 2].slice(1, -1)}</p>
      </div>
    `
    container.insertAdjacentHTML('afterend', html)
  }
})
