const toggle = document.getElementById('toggledark');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    
    if (this.classList.contains('bi-brightness-high-fill')) {
        applyLightTheme();
    } else {
        applyDarkTheme();
    }
});

function applyLightTheme() {
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = 'background-color 2s, color 2s';
    logo.style.color = 'black';
    header.style.backgroundColor = 'white';
    
    sections.forEach(section => {
        section.style.backgroundColor = '#f5f5f5';
    });
}

function applyDarkTheme() {
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = 'background-color 2s, color 2s';
    logo.style.color = 'white';
    header.style.backgroundColor = 'black';
    
    sections.forEach(section => {
        section.style.backgroundColor = '#333';
    });
}

