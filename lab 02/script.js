// function showPage(pageId) {
//   const pages = document.querySelectorAll('.page');
//   pages.forEach(p => p.classList.remove('active'));
//   document.getElementById(pageId).classList.add('active');

//   // Update active link
//   document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
//   event.target.classList.add('active');
// }

// function toggleMenu() {
//   document.getElementById('navLinks').classList.toggle('show');
// }
// function showPage(pageId) {
//   document.querySelectorAll('.page').forEach(page => {
//     page.classList.add('hidden');
//   });
//   document.getElementById(pageId).classList.remove('hidden');
// }


// ==== NAVBAR MENU TOGGLE (for mobile) ====
function toggleMenu() {
  const navLinks = document.getElementById('navlinks'); // match your HTML id
  navLinks.classList.toggle('show');
}

// ==== PAGE SWITCHING FUNCTION ====
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show selected page
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.classList.add('active');
  }

  // Remove "active" class from all navbar links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
  });

  // Highlight the clicked link
  const clickedLink = event.target;
  clickedLink.classList.add('active');

  // Close the menu (for mobile)
  const navLinks = document.getElementById('navlinks');
  navLinks.classList.remove('show');
}

// // ==== DEFAULT PAGE (HOME) ====
// document.addEventListener("DOMContentLoaded", () => {
//   showPage('home');
// });
