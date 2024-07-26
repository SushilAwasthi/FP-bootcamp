document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(location.search);
  const postId = urlParams.get("id");

  if (postId) {
    fetch("https://reqres.in/api/users/" + postId)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        const userdata = (el) => {
          return `
          <li class="card-container">
          <div>
          <p class="body">$(el.data)</p>
          </div>
          </li>
          `;
        };
        document.querySelector(".details-content").innerHTML =
          JSON.stringify(data);
      });
  }
});
