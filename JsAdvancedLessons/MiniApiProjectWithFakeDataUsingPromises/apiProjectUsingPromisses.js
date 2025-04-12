const Datacontainer = document.getElementById('data-container');
const ListContainer = document.querySelector('#users-list ul');

// Function to fetch posts by user ID
function GetAllPostsByUserID(userID) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            Datacontainer.innerHTML = ''; // Clear the data container before adding new posts
            data.forEach(post => {
                AddNewPostToTheDataContainer(post); // Add new post to the data container
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
}

// Function to add a new post to the data container
function AddNewPostToTheDataContainer(post) {
    let div = document.createElement('div');
    let title = document.createElement('h5');
    let body = document.createElement('p');

    title.innerText = post.title;
    body.innerText = post.body;
    div.appendChild(title);
    div.appendChild(document.createElement('hr'));
    div.appendChild(body);

    Datacontainer.appendChild(div);
}

// Function to fetch all users
function GetAllListUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            data.forEach(user => {
                FillTheListItemWithUserNameAndEmail(user); // Fill the list with user name and email
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}

// Function to fill the list with user name and email
function FillTheListItemWithUserNameAndEmail(user) {
    let user_element = document.createElement('li');
    let user_name = document.createElement('h5');
    user_name.innerText = user.name;
    let user_email = document.createElement('small');
    user_email.innerText = user.email;

    user_element.appendChild(user_name);
    user_element.appendChild(user_email);

    // Fetch posts for the clicked user
    user_element.addEventListener('click', () => {
        GetAllPostsByUserID(user.id);
    });

    ListContainer.appendChild(user_element);
}

// this is exampel method as the jsonplaceholder api does not support adding new post
function AddNewPost(userID, title, body) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      body: body,
      userId: userID,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("New post added:", data);
      AddNewPostToTheDataContainer(data); // Add the new post to the UI
    })
    .catch((error) => {
      console.error("Error adding new post:", error);
    });
}

// Fetch all users when the page loads
document.addEventListener('DOMContentLoaded', function () {
    GetAllListUsers();
});