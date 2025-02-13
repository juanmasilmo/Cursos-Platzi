<<<<<<< HEAD
//verbos http
//GET, POST, PATCH, PUT, DELETE

/*etch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))*/


const listElement = document.querySelector(".post")
const postTemplate = document.getElementById("single-post")
const form = document.querySelector("#new-post form")
const fetchButton = document.querySelector("#available-post button")
const postList = document.querySelector("#post-container")


function sendHTTPRequest(method, url, data) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        },
    }).then((response) => { return response.json() });
}

async function fetchPost() {
    const responseData = await sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts");
    console.log(responseData)
    const listOfPost = responseData;

    for (const post of listOfPost) {
        const postContainer = document.createElement("article");
        postContainer.id = post.id;
        postContainer.classList.add("post-item");

        const title = document.createElement("h2");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        const button = document.createElement("button");
        button.textContent = "DELETE Content";

        postContainer.append(title);
        postContainer.append(body);
        postContainer.append(button);

        listElement.append(postContainer)
    }
}

fetchButton.addEventListener("click", fetchPost)

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    }

    sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post)
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = event.currentTarget.querySelector("#title").value;
    const content = event.currentTarget.querySelector("#content").value

    createPost(title, content)
})
postList.addEventListener("click", event=>{
    console.log(event);
    if(event.target.tagName === "BUTTON"){
        const postId= event.target.closest("article").id;
        console.log(postId)
        sendHTTPRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
})
=======
// verbos http
// GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, CONNECT, TRACE
>>>>>>> e7a3e904141da903ebafb7ac670ec0387b140064
