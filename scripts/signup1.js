import { fetchData } from "../scripts/request.js";
window.addEventListener("DOMContentLoaded", function () {
  const submitbtn = document.querySelector("#submit");
  submitbtn
    .addEventListener("click", async function (e) {
      e.preventDefault();

      const form = document.getElementById("form");
      const formdata = new FormData(form);

      const formDataObj = {};
      formdata.forEach((value, key) => {
        formDataObj[key] = value;
      });
      console.log(formDataObj);
      const data = await fetchData(
        "https://reqres.in/api/users/",
        "POST",
        formDataObj
      );
      console.log(data);
      if (data.error) {
        alert(data.error);
      } else {
        alert("Registration successfull");
        sessionStorage.setItem("user", JSON.stringify(data));
        location.href = "/index.html";
      }
    })
    .catch((err) => {
      console.log(err);
      alert("registration failed!");
    });
});
