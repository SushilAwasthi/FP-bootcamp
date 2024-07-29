function validate() {
  document.getElementById("username-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("phone-error").textContent = "";

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  let isValid = true;
  if (username === "") {
    document.getElementById("username-error").textContent =
      "Username cannot be blank";
    isValid = false;
  }
  if (email === "") {
    document.getElementById("email-error").textContent = "Email must be filled";
    isValid = false;
  }
  if (phone === "") {
    document.getElementById("phone-error").textContent =
      "Phone number must be filled";
    isValid = false;
  }
  if (isValid) {
    alert(`Username: ${username}\nEmail: ${email}\nPhone: ${phone}`);
  }
  return isValid;
}

window.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (user) {
    console.log("User data from session storage:", user);
    document.getElementById(
      "welcomeMessage"
    ).textContent = `welcome ${JSON.stringify(user["username"])}`;
  } else {
    console.log("No user data found in session storage");
  }
});

//dropdown menu
const togglebtn = document.querySelector(".toggle_btn");
const togglebtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown-menu");

togglebtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
};

window.addEventListener("DOMContentLoaded", function () {
  const user = sessionStorage.getItem("user");
  console.log(user);
  if (user) {
    document
      .querySelectorAll(".login-link, .signup-link")
      .forEach((el) => (el.style.display = "none"));
    const postlinks = document.querySelector(".posts-Link");
    postlinks.style.display = "block";
    const logoutLink = document.querySelector(".logout-link");
    logoutLink.style.display = "block";

    document.getElementById("logout").addEventListener("click", function (e) {
      e.preventDefault();
      sessionStorage.removeItem("user");
      window.location.href = "/app/login.html";
    });
  }
});
function redirectToPost(id) {
  window.location.href = `/app/post.html?id=${id}`;
}
