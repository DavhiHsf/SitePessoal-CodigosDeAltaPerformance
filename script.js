function navigateTo(url) {
  window.location.href = url;
  sessionStorage.setItem('link', window.location.href)
  } 

function navigateToBack() {
window.location.href = sessionStorage.getItem('link');
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

function menushow() {
  let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');

      }  else {
          menuMobile.classList.add('open')

    }
}

function LoginSave() {

}