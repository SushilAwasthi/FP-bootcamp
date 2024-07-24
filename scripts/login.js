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
            .then(res => {
                if (!res.ok) {
                    throw new Error('Login failed');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                sessionStorage.setItem('user', JSON.stringify(data));
                });

                alert('Login successful!');
                window.location.href = '/index.html';
            })
            .catch(err => {
                console.error(err);
                alert('Login failed!');
            });
    });