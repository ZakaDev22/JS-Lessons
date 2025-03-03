
let after = document.getElementById('after');
let before = document.getElementById('before');
let append = document.getElementById('append');
let content = document.getElementById('content');
let container = document.getElementsByClassName('container')[0];

after.addEventListener('click', () => {

    container.after(content);
});
before.addEventListener('click', () => {

    container.before(content);
});
append.addEventListener('click', () => {

    container.append(content);
});
