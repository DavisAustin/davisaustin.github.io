// Get the theme switcher button element
const themeSwitcher = document.getElementById('theme-switcher');

// Get the root element of the document
const root = document.documentElement;

// Function to toggle between light and dark mode
const toggleTheme = () => {
  // Toggle the 'dark' class on the root element
  root.classList.toggle('dark');
}

// Add event listener to the theme switcher button
themeSwitcher.addEventListener('click', toggleTheme);
