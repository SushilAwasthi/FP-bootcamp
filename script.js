function validate() {
    // Clear previous error messages
    document.getElementById('username-error').textContent = "";
    document.getElementById('email-error').textContent = "";
    document.getElementById('phone-error').textContent = "";

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    let isValid = true;

    if (username === "") {
        document.getElementById('username-error').textContent = 'Username cannot be blank';
        isValid = false;
    } 
    if (email === "") {
        document.getElementById('email-error').textContent = 'Email must be filled';
        isValid = false;
    } 
    if (phone === "") {
        document.getElementById('phone-error').textContent = 'Phone number must be filled';
        isValid = false;
    } 
    if(isValid) {
        alert(`Username: ${username}\nEmail: ${email}\nPhone: ${phone}`);
    }

    return isValid;
}
