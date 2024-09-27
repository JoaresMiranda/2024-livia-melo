// Get Elements
const menuWeb = document.querySelector('.menu');
const menuMobile = document.querySelector('.menu-mobile');
const menuDropDown = document.querySelector('.menuDropDown');

// Function to toggleClass
const toggleOpen = (element) => element.classList.toggle('hidden');

// Menu open/close
const menuToggle = () => toggleOpen(menuDropDown);
