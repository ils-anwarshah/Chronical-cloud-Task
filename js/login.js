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

function validateForm(){
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