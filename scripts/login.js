import { request } from "../scripts/request.js";
function validate() {
  document.getElementById("username-error").textContent = "";
  document.getElementById("password-error").textContent = "";

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let isValid = true;
  if (username === "") {
    document.getElementById("username-error").textContent =
      "Username cannot be blank";
    isValid = false;
  }
  if (password === "") {
    document.getElementById("password-error").textContent =
      "Password must be filled";
    isValid = false;
  }
  if (isValid) {
    alert(`Username: ${username}\nPassword: ${password}`);
  }
  return isValid;
}
window.addEventListener("DOMContentLoaded", function () {
  const submitbtn = document.querySelector("#submit");
  submitbtn.addEventListener("click", async function (e) {
    e.preventDefault();
    if (validate()) {
      const form = document.getElementById("form");
      const formdata = new FormData(form);
      const formDataObj = {};
      formdata.forEach((value, key) => {
        formDataObj[key] = value;
      });
      try {
        const data = await request(
          "https://reqres.in/api/login/",
          "POST",
          formDataObj
        );
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          alert("Login successful");
          sessionStorage.setItem("user", JSON.stringify(data));
          window.location.href = "/index.html";
        }
      } catch (err) {
        console.error(err);
        alert("Login failed!");
      }
    }
  });
});
