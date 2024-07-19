function validate(){

        const  username = document.getElementById('username').value;
        const  email= document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const pwd= document.getElementById('pwd').value;

            
            if(username == ""){
               
            }else if(username.length <= 2){
                    alert('atleast three character username');
                
            }else if(email == ""){
                alert('email must be filled');
            }else if(phone == ""){
                alert('phone no must be filled');
            }
            else if(phone.length < 10){
                alert("phone no should be 10 character");
            }
            else if(pwd==""){
                alert("Please enter password");
            }
            else if(pwd.length < 5){
                alert("Password must be of 5 character");
            }
            else{
                alert(
                    JSON.stringify({name:username,
                      email:email,
                      phone:phone}))
            }
            return false;
}     

