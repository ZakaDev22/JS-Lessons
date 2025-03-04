
let btn = window.document.getElementById('scroll');


window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

btn.addEventListener('click', () => {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});