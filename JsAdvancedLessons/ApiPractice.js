let request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
request.send();
request.onload = function () {
    if (this.status >= 200 && this.status < 300) {
        let data = JSON.parse(this.responseText);
        console.log(data);
    } else {
        console.error('Request failed with status:', this.status);
    }
};
request.onerror = function () {
    console.error('Request failed');
};

document.addEventListener('DOMContentLoaded', function () {
    let request2 = new XMLHttpRequest();
    let container = document.getElementById('container');

    request2.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    request2.responseType = 'json'; // Set the response type to JSON
    request2.send();
    request2.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            let data = this.response; // No need to parse, it's already JSON
            data.forEach(post => {
                let postElement = document.createElement('div');
                postElement.innerText = `Title: ${post.title}`;
                container.appendChild(postElement);
            });
        } else {
            console.error('Request failed with status:', this.status);
        }
    };
    request2.onerror = function () {
        console.error('Request failed');
    };
});