// script.js
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    let isDarkMode = false;
    
    // Function to toggle theme
    function toggleTheme() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            // Switch to dark mode
            body.classList.remove('light');
            body.classList.add('dark');
            themeIcon.textContent = '🌙';
        } else {
            // Switch to light mode
            body.classList.remove('dark');
            body.classList.add('light');
            themeIcon.textContent = '🌞';
        }
    }
    
    // Add click event listener
    themeToggle.addEventListener('click', toggleTheme);
    
    // Set initial light mode
    body.classList.add('light');
});