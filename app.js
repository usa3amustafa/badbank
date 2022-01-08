const currentLocation = location.href
const navLinks = document.querySelectorAll('.nav-link')
const navLinksLength = navLinks.length

// navbar tooltip

for (let i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === currentLocation) {
    navLinks[i].className = 'active'
  }
}

// tooltips
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
)
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
