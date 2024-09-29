function getPosts() {
  let request = new XMLHttpRequest();

  request.open("GET", "https://jsonplaceholder.typicode.com/posts");

  request.send();

  const content = document.getElementById("content");
  request.responseType = "json";
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let posts = request.response;
      for (post of posts) {
        content.innerHTML += `<h1>${post.title}</h1>`;
      }
    } else {
      alert("Error");
    }
  };
}

function getFilteredPosts() {
  let request = new XMLHttpRequest();

  request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=1");

  request.send();

  const content = document.getElementById("content");
  request.responseType = "json";
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let posts = request.response;
      for (post of posts) {
        content.innerHTML += `<h1>${post.title}</h1>`;
      }
    } else {
      alert("Error");
    }
  };
}

function createPost() {
  let request = new XMLHttpRequest();
  request.open("POST", "https://jsonplaceholder.typicode.com/posts");
  request.responseType = "json";
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-Type", "application/json");
  let bodyParams = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  request.send(JSON.stringify(bodyParams));
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      console.log(request.response);
      console.log(request.status);
      console.log("Post created");
    }
  };
}

function editPost() {
  let request = new XMLHttpRequest();
  request.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
  request.responseType = "json";
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-Type", "application/json");
  let bodyParams = {
    title: "Magic",
    body: "bar",
    userId: 1,
  };
  request.send(JSON.stringify(bodyParams));
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      console.log(request.response);
      console.log(request.status);
      console.log("Post Edited successfully");
    }
  };
}

function deletePost() {
  let request = new XMLHttpRequest();
  request.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
  request.responseType = "json";
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      console.log(request.response);
      console.log(request.status);
      console.log("Post Deleted successfully");
    }
  };
}

createPost();
// getPosts();
getFilteredPosts();
editPost();
deletePost();
