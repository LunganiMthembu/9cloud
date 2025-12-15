// Academic programs data and functionality

const academicPrograms = [
  {
    id: "mathematics",
    title: "Mathematics",
    description:
      "Explore the fundamental principles of mathematics including algebra, calculus, statistics, and advanced mathematical concepts.",
    icon: "📊",
    color: "blue",
    topics: [
      "Algebra and Linear Algebra",
      "Calculus and Analysis",
      "Statistics and Probability",
      "Discrete Mathematics",
      "Mathematical Modeling",
      "Number Theory",
    ],
    syllabus: "mathematics-syllabus.pdf",
  },
  {
    id: "science",
    title: "Natural Sciences",
    description: "Comprehensive study of physics, chemistry, and biology with hands-on laboratory experience.",
    icon: "🔬",
    color: "green",
    topics: [
      "Classical and Modern Physics",
      "Organic and Inorganic Chemistry",
      "Cell Biology and Genetics",
      "Environmental Science",
      "Scientific Method and Research",
      "Laboratory Techniques",
    ],
    syllabus: "science-syllabus.pdf",
  },
  {
    id: "technology",
    title: "Technology & Computer Science",
    description: "Learn programming, software development, artificial intelligence, and emerging technologies.",
    icon: "💻",
    color: "purple",
    topics: [
      "Programming Languages (Python, JavaScript, Java)",
      "Data Structures and Algorithms",
      "Web Development",
      "Artificial Intelligence and Machine Learning",
      "Database Systems",
      "Cybersecurity Fundamentals",
    ],
    syllabus: "technology-syllabus.pdf",
  },
  {
    id: "history",
    title: "History & Social Studies",
    description: "Examine historical events, cultural developments, and their impact on modern society.",
    icon: "📚",
    color: "yellow",
    topics: [
      "World History and Civilizations",
      "Modern European History",
      "American History",
      "Social and Political Movements",
      "Historical Research Methods",
      "Cultural Studies",
    ],
    syllabus: "history-syllabus.pdf",
  },
  {
    id: "literature",
    title: "Literature & Language Arts",
    description: "Study classic and contemporary literature, develop writing skills, and explore linguistic concepts.",
    icon: "📖",
    color: "red",
    topics: [
      "Classical Literature",
      "Modern and Contemporary Works",
      "Poetry and Drama",
      "Creative Writing",
      "Literary Analysis and Criticism",
      "Comparative Literature",
    ],
    syllabus: "literature-syllabus.pdf",
  },
  {
    id: "philosophy",
    title: "Philosophy & Ethics",
    description: "Explore fundamental questions about existence, knowledge, values, and moral reasoning.",
    icon: "🤔",
    color: "indigo",
    topics: [
      "Ancient and Medieval Philosophy",
      "Modern Philosophy",
      "Ethics and Moral Philosophy",
      "Logic and Critical Thinking",
      "Philosophy of Mind",
      "Political Philosophy",
    ],
    syllabus: "philosophy-syllabus.pdf",
  },
]

function loadAcademicPrograms() {
  const programsGrid = document.getElementById("programsGrid")
  if (!programsGrid) return

  programsGrid.innerHTML = academicPrograms
    .map(
      (program) => `
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer program-card" 
             data-program-id="${program.id}">
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <div class="text-3xl mr-4">${program.icon}</div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">${program.title}</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-4">${program.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-${program.color}-600 dark:text-${program.color}-400 font-medium">
                        ${program.topics.length} Topics
                    </span>
                    <button class="bg-university-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")

  // Add click event listeners
  document.querySelectorAll(".program-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const programId = card.dataset.programId
      const program = academicPrograms.find((p) => p.id === programId)
      if (program) {
        showCourseModal(program)
      }
    })
  })
}

function showCourseModal(program) {
  const modal = document.getElementById("courseModal")
  const modalTitle = document.getElementById("modalTitle")
  const modalContent = document.getElementById("modalContent")
  const downloadBtn = document.getElementById("downloadSyllabus")

  modalTitle.textContent = program.title

  modalContent.innerHTML = `
        <div class="space-y-6">
            <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Course Description</h3>
                <p class="text-gray-600 dark:text-gray-400">${program.description}</p>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Topics Covered</h3>
                <ul class="space-y-2">
                    ${program.topics
                      .map(
                        (topic) => `
                        <li class="flex items-center text-gray-600 dark:text-gray-400">
                            <svg class="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            ${topic}
                        </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Prerequisites</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Basic understanding of the subject area. Some programs may require completion of foundational courses.
                </p>
            </div>
            
            <div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Learning Outcomes</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Upon completion, students will have a comprehensive understanding of ${program.title.toLowerCase()} 
                    and be able to apply critical thinking skills to solve complex problems in the field.
                </p>
            </div>
        </div>
    `

  // Set up download button
  downloadBtn.onclick = () => {
    // Simulate PDF download
    window.EHU.showNotification(`Downloading ${program.title} syllabus...`)

    // In a real application, this would trigger an actual download
    setTimeout(() => {
      window.EHU.showNotification(`${program.title} syllabus downloaded successfully!`)
    }, 1500)
  }

  modal.classList.remove("hidden")
}

function closeCourseModal() {
  const modal = document.getElementById("courseModal")
  modal.classList.add("hidden")
}

// Initialize academics page
document.addEventListener("DOMContentLoaded", () => {
  loadAcademicPrograms()

  // Set up modal close functionality
  const closeModalBtn = document.getElementById("closeModal")
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeCourseModal)
  }

  // Close modal when clicking outside
  const modal = document.getElementById("courseModal")
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeCourseModal()
      }
    })
  }
})
