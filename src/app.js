import { http } from "./http";
import { ui } from "./ui";


function getPosts() {
  http.get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

// Get posts on DOM load
document.addEventListener("DOMContentLoaded", getPosts);