
let btn = document.getElementById('toggle');
let sidebar = document.getElementsByClassName('left-bar')[0];

btn.addEventListener('click', () => {
    sidebar.classList.toggle('hide');
});