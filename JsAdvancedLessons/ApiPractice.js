
function GetAllPosts() {
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
}

function GetAllPostsByUserID(userID) {
    let request2 = new XMLHttpRequest();
    let container = document.getElementById('container');

    request2.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${userID}`, true);
    request2.responseType = 'json'; // Set the response type to JSON
    request2.send();
    request2.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            let data = this.response; // No need to parse, it's already JSON
            data.forEach(post => {
                let postElement = document.createElement('div');
                postElement.innerText = `UserID: ${post.userId}, Title: ${post.title}`;
                container.appendChild(postElement);
            });
        } else {
            console.error('Request failed with status:', this.status);
        }
    };
    request2.onerror = function () {
        console.error('Request failed');
    };
}

function AddNewPost() {
    let request2 = new XMLHttpRequest();
    let container = document.getElementById('container');

    request2.open('POST', `https://jsonplaceholder.typicode.com/posts`, true);
    request2.responseType = 'json'; // Set the response type to JSON
    request2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request2.send(JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }));
    request2.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            let data = this.response; // No need to parse, it's already JSON

            let postElement = document.createElement('div');
            postElement.innerText = `Title: ${data.title}`;
            console.log(data);
            container.appendChild(postElement);

        } else {
            console.error('Request failed with status:', this.status);
        }
    };
    request2.onerror = function () {
        console.error('Request failed');
    };
}

function UpdatePost(PostId) {
    let request2 = new XMLHttpRequest();
    let container = document.getElementById('container');

    request2.open('PUT', `https://jsonplaceholder.typicode.com/posts/${PostId}`, true);
    request2.responseType = 'json'; // Set the response type to JSON
    request2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request2.send(JSON.stringify({
        title: 'Zakaria',
        body: 'King',
        userId: 1,
    }));
    request2.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            let data = this.response; // No need to parse, it's already JSON

            let postElement = document.createElement('div');
            postElement.innerText = `Title: ${data.title}`;
            console.log(data);
            container.appendChild(postElement);

        } else {
            console.error('Request failed with status:', this.status);
        }
    };
    request2.onerror = function () {
        console.error('Request failed');
    };
}

function UpdatePostUsingPatch(PostId) {
    let request2 = new XMLHttpRequest();
    let container = document.getElementById('container');

    request2.open('PATCH', `https://jsonplaceholder.typicode.com/posts/${PostId}`, true);
    request2.responseType = 'json'; // Set the response type to JSON
    request2.setRequestHeader("Accept", "application/json");
    request2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 
    let bodyPar = `{ "title": "Zakaria", "body": "King" }`;
     request2.send(bodyPar);
    request2.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            let data = this.response; // No need to parse, it's already JSON

            let postElement = document.createElement('div');
            postElement.innerText = `Title: ${data.title}`;
            console.log(data);
            container.appendChild(postElement);

        } else {
            console.error('Request failed with status:', this.status);
        }
    };
    request2.onerror = function () {
        console.error('Request failed');
    };
}

function DeletePost(PostId) {
    let request2 = new XMLHttpRequest();
    let container = document.getElementById('container');

    request2.open('DELETE', `https://jsonplaceholder.typicode.com/posts/${PostId}`, true);
    request2.responseType = 'json';
    request2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request2.send();
    request2.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            
            let postElement = document.createElement('div');
            postElement.innerText = `Post With Id ${PostId} Deleted`;
            container.appendChild(postElement);

        } else {
            console.error('Request failed with status:', this.status);
        }
    };
    request2.onerror = function () {
        console.error('Request failed');
    };
}


document.addEventListener('DOMContentLoaded', function () {

    // GetAllPosts();
    // GetAllPostsByUserID(1);
    // AddNewPost();
    // UpdatePost(1);
    UpdatePostUsingPatch(1);
    // DeletePost(3);
});