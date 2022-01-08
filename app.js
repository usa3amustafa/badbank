const currentLocation = location.href
const navLinks = document.querySelectorAll('.nav-link')

const navLinksLength = navLinks.length

for (let i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === currentLocation) {
    navLinks[i].className = 'active'
  }
}

// tooltips

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
)
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
