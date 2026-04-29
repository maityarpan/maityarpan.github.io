// Get all sections and nav links
const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('nav a');

// Function to show only one section at a time
function showSection(id) {
  sections.forEach(sec => sec.classList.add('hidden')); // hide all
  document.querySelector(id).classList.remove('hidden'); // show selected
}

// Default view = About
showSection('#home');

// Listen for nav clicks
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href'); // e.g. #projects
    showSection(target);
  });
});

const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change icon
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }
});
