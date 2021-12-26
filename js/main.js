const elsiteThemeToggler = document.querySelector('.dark-mode-button');

elsiteThemeToggler.addEventListener('click', function (){
document.body.classList.toggle('dark-mode');
});

// const elDarkModeLink = document.querySelector('.dark-mode-button');

// elDarkModeLink.addEventListener('click', function() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// });