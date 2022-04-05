// javascript for index.html
const continer = document.querySelector(".blogs");
const renderPosts = async () => {
  let url = "http://localhost:3000/posts";

  const res = await fetch(url);
  const posts = await res.json();
  console.log(posts);
  let template = "";
  posts.forEach((post) => {
    template += `
    <div class="post">
    <h2>${post.title}</h2>
    <p><small>${post.likes}likes</small></p>
    <p>${post.body.slice(0, 200)}</p>
    <a href="/details.html?id=${post.id}">read more...</a>
    </div>`;
  });
  continer.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", (e) => renderPosts());
