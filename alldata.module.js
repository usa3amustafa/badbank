const data = localStorage.getItem(JSON.parse(JSON.stringify('data')))
const allDataBody = document.getElementById('all-data-body')

const data2 = data.slice(2, -2)
const data3 = data.split(',')

console.log(data3)

data3.forEach(arr => {
  const html = `
        <tr>
          <td>${arr.slice(2, -1)}</td>
        </tr>
    `

  allDataBody.insertAdjacentHTML('afterbegin', html)
})
