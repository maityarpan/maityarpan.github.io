// Get all sections and nav links
const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('nav a');

// Function to show only one section at a time
function showSection(id) {
  sections.forEach(sec => sec.classList.add('hidden')); // hide all
  document.querySelector(id).classList.remove('hidden'); // show selected
}

// Default view = About
showSection('#about');

// Listen for nav clicks
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href'); // e.g. #projects
    showSection(target);
  });
});
