function navigateTo(url) {
    window.location.href = url;
    
    } 

function darkmode() {
    const htmlElement = document.documentElement;
    const button = document.getElementById('darkmode')

    htmlElement.classList.toggle('darkmode');

  if (htmlElement.classList.contains('darkmode')) {
    button.textContent = 'LightMode ☀️';
    localStorage.setItem('theme', 'dark');

  } 
  
  else {
    button.textContent = 'DarkMode 🌕';
    localStorage.setItem('theme', 'light');
  }
}

function fixartema() {
    const theme = localStorage.getItem('theme');
    const htmlElement = document.documentElement;
    const button = document.getElementById('darkmode');
    
    if (theme === 'dark') {
      htmlElement.classList.add('darkmode');
      button.textContent = 'LightMode ☀️';
    } else {
      htmlElement.classList.remove('darkmode');
      button.textContent = 'DarkMode 🌕';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    fixartema();
    document.getElementById('darkmode').addEventListener('click', darkmode);
  });