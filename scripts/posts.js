document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(location.search);
  const posts = urlParams.getAll("id");

  if (posts) {
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then((json) => {
        const userdata = json.data.map((el) => {
          return `
          <li class="card-container" onclick="redirectToPost(${el.id})">
                <div class="image-container">
                    <img class="round" style="cursor:pointer" src="${el.avatar}">
                </div>
                <div>
                    <span class="firstName">${el.first_name} </span>

                    <span class="lastName">${el.last_name}</span>
                </div>
                <div>
                    <p class="email"${el.email}</p>
                </div>
            </li>
          `;
        });
        document.querySelector(".list-container").innerHTML = userdata;
      })
      .catch((error) => console.error("error while fetching data", error));
  }
});
