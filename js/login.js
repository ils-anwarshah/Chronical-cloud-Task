const togglePassword = document.getElementById('eye');
  const password = document.getElementById('floatingPassword');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});



function seterror(id , error){
    document.getElementById(id).innerHTML = error;
    // ele.innerHTML = error; 
}

function validateEmail(){
    let returnval = true;
    let email = document.forms['login-form']['email'].value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    let element = document.getElementById('err');
    let border = document.getElementById('floatingInput');
    if(!email.match(regex)){
        element.innerHTML="*Please enter valid email address"
        border.style.borderBottomColor='red'
        // console.log(email)
        returnval = false;
    }
    else{
        element.innerHTML=''
        border.style.borderBottomColor='#0974DD'
        returnval = true;
    }

    return returnval;
}
function validatePassword(){
    let returnval = true;
    let password = document.forms['login-form']['password'].value;
    let element = document.getElementById('err2');
    let border = document.getElementById('floatingInput');
    if (password.trim().length < 5 || password.trim() === ''){
        element.innerHTML = "*Enter Valid Password";
        returnval= false;
    }
    else {
        element.innerHTML = ''
        returnval = true;
        
    }
    return returnval;

}

function checkEmailandPassword(){
    let element = document.getElementById('err');
    let email = document.getElementById('floatingInput').value;
    let password = document.getElementById('floatingPassword').value;
    const userData_container = {
        "userData":[{
            "email":'anwarshah.cs@gmail.com',
            "password":'iLead@123'
        }
    ]
    } 

    if ( email === userData_container.userData[0].email && password === userData_container.userData[0].password){
        element.innerHTML = ''
        return true;
    }
    else {
        element.innerHTML ='*invalid email or password';
        return false;
        
    }
}

function validateForm(e){
    e.preventDefault();
    let returnval = false;
    if (validateEmail() && validatePassword() && checkEmailandPassword()){
        returnval = true;
        window.location.href = "dashboard.html";
    }
    else {
        returnval = false;
    }
    return returnval;
}