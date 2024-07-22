function validate() {
   
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

function SignupPage(){
    document.getElementById('username-error').textContent ="";
    document.getElementById('email-error').textContent ="";
    document.getElementById('phone-error').textContent="";
    document.getElementById('password-error').textContent="";


    const username=document.getElementById('name');
    const email=document.getElementById('email');
    const phone =document.getElementById('phone');
    const password=document.getElementById('pwd');
    const cpassword=document.getElementById('pwd');

    let isValid = true;
    if(username == ""){
        document.getElementById('username-error').textContent ='username cannot be blank'
        isValid = false;
    }
    if(email == ""){
        document.getElementById('email-error').textContent='email cannot be blank'
        isValid =false;
    }
    if(phone == ""){
        document.getElementById('phone-error').textContent='phone cannot be blank'
        isValid =false;
    }
    if(password == ""){
        document.getElementById('password-error').textContent='password cannot be blank'
        isValid =false;
    }
     if(cpassword == ""){
        document.getElementById('cpassword-error').textContent='re-enter password'
        isValid =false;
    }
   
}
function Loginpage(){
    const user =document.getElementById('name');
    const password=document.getElementById('pwd');
}


