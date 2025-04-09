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

 function GetAllListUsers() {
    let request2 = new XMLHttpRequest();

    request2.open('GET', `https://jsonplaceholder.typicode.com/users`, true);
    request2.responseType = 'json'; // Set the response type to JSON
    request2.send();
    request2.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            let data = this.response; // No need to parse, it's already JSON
            data.forEach(user => {
                
              FillTheListItemWithUserNameAndEmail(user); // Fill the list with user name and email
               
            });
        } else {
            console.error('Request failed with status:', this.status);
        }
    };
    request2.onerror = function () {
        console.error('Request failed');
    };
}


function FillTheListItemWithUserNameAndEmail(user)
{
    let user_element = document.createElement('li');
          let user_name = document.createElement('h5');
          user_name.innerText = user.name;
          let user_email = document.createElement('small');
          user_email.innerText = user.email;
          user_element.appendChild(user_name);
          user_element.appendChild(user_email)
           // Fetch posts for the clicked user
          user_element.addEventListener('click', () => {
              GetAllPostsByUserID(user.id); 
          });

    ListContainer.appendChild(user_element);
}


document.addEventListener('DOMContentLoaded', function () {

// Fetch all users when the page loads
 GetAllListUsers();

});