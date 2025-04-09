document.addEventListener('DOMContentLoaded', function () {

 const Datacontainer = document.getElementById('data-container');
 const ListContainer = document.querySelector('#users-list ul');

 function GetAllPostsByUserID(userID) {
    let request2 = new XMLHttpRequest();

    request2.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${userID}`, true);
    request2.responseType = 'json'; // Set the response type to JSON
    request2.send();
    request2.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            let data = this.response; // No need to parse, it's already JSON
            data.forEach(post => {
                console.log(post);
            });
        } else {
            console.error('Request failed with status:', this.status);
        }
    };
    request2.onerror = function () {
        console.error('Request failed');
    };
}

 function GetAllUserUsers() {
    let request2 = new XMLHttpRequest();

    request2.open('GET', `https://jsonplaceholder.typicode.com/users`, true);
    request2.responseType = 'json'; // Set the response type to JSON
    request2.send();
    request2.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            let data = this.response; // No need to parse, it's already JSON
            data.forEach(post => {
                let postElement = document.createElement('li');
               
            });
        } else {
            console.error('Request failed with status:', this.status);
        }
    };
    request2.onerror = function () {
        console.error('Request failed');
    };
}



});