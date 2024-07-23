window.addEventListener('DOMContentLoaded', function () {
    const submitbtn = document.querySelector('#submit');
    submitbtn.addEventListener('click', function (e) {
        e.preventDefault();

        const form = document.getElementById('form');
        const formdata = new FormData(form);
        
        const formDataObj = {};
        formdata.forEach((value, key) => {
            formDataObj[key] = value;
        });
        console.log(formDataObj);

        fetch("https://reqres.in/api/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObj), 
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                   sessionStorage.setItem('user', JSON.stringify(data));
                   alert("Registration successfull");
                    window.location.href = '/app/login.html';
            })
            .catch(err => {
                console.log(err);
                alert("registration failed!");
            });
    });
});
