// Main JavaScript file for common functionality across all pages

// Dark mode functionality
function initDarkMode() {
  const darkModeToggle = document.getElementById("darkModeToggle")
  const html = document.documentElement

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    html.classList.toggle("dark", savedTheme === "dark")
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      html.classList.toggle("dark")
      const isDark = html.classList.contains("dark")
      localStorage.setItem("theme", isDark ? "dark" : "light")
    })
  }
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add("hidden")
      }
    })
  }
}

// Utility functions
function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full ${
    type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
  }`
  notification.textContent = message

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.classList.remove("translate-x-full")
  }, 100)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.add("translate-x-full")
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Initialize common functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode()
  initMobileMenu()
})

// Export functions for use in other files
window.EHU = {
  showNotification,
  formatDate,
  shuffleArray,
}
