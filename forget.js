



function seterror(id , error){
    document.getElementById(id).innerHTML = error;
    // ele.innerHTML = error; 
}

function validateForm(){
    let returnval = true;
    let email = document.forms['forget-form']['email'].value;
    let regex = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}";
    let element = document.getElementById('err');
    let border = document.getElementById('floatingInput');
    if(!email.match(regex)){
        //element.style.visibility='visible'
        //seterror("err", "*Enter valid Email")
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