let active1 = document.getElementById('active-1');
let active2 = document.getElementById('active-2');
let element = document.getElementById('next-step');
let step1 = document.getElementById('step-1');
let step2 =document.getElementById('step-2');
let stepback = document.getElementById('step-back');
function NextStepvalidation(){
    let returnval = false;
    // active1.classList.remove('active');
    //  active2.classList.add('active');
    if ( validateFirstName() && validateLastName() && validateEmail() && validateNumber() && validatePass() && validateConfimPass()){
        //button.disabled =false;
        step1.classList.add('card-hide');
        step2.classList.remove('card-hide');
        returnval = true;
    }else{
        //button.disabled = true;
        // console.log("INvalid Fields")
    }
    return returnval;
    
};
function FormSubmit(){
    let returnval = false;
    if (NextStepvalidation() && ValidateSchoolName() && ValidateStateName() && ValidateCityName() && ValidateCountryName() && ValidateZipCode() && checkCheckBoxes()){
        returnval = true;
    }
    else {
        returnval = false;
    }
    return returnval;
}

stepback.addEventListener('click', function(e){
    // active1.classList.add('active');
    // active2.classList.remove('active');
    step2.classList.add('card-hide');
    step1.classList.remove('card-hide');
});

const togglePassword1 = document.getElementById('eye1');
  togglePassword1.addEventListener('click', function (e) {
    // toggle the type attribute
    toggleEye('floatingPass1')
    this.classList.toggle('fa-eye-slash');
});

const togglePassword2 = document.getElementById('eye2')
    togglePassword2.addEventListener('click', function(e){
        toggleEye('floatingPass2')
        this.classList.toggle('fa-eye-slash')
    })


function toggleEye(passField){
    let passField1 = document.getElementById(passField);
    let type1 = passField1.getAttribute('type') === 'password' ? 'text' : 'password';
    passField1.setAttribute('type', type1);
    
}


function InvalidBorder(name){
    name.classList.add('invalid-border')
}
function validBorder(name){
    name.classList.remove('invalid-border')
}

function validateFirstName(){
    let returnval = true;
   
    let fname = document.forms['signIn-form']['fname'].value;
    //console.log(fname)
    let ErrorField = document.getElementById('fname-error');
    let fnameborder = document.forms['signIn-form']['fname']
    
    if(fname.trim().length < 4 || fname.trim() === ''){
        //console.log("error")
        ErrorField.innerHTML = "*First name is required";
        InvalidBorder(fnameborder)
        returnval = false;
    }
    else{
        ErrorField.innerHTML='';
        validBorder(fnameborder)
        returnval = true;
    }

    return returnval;
}
function validateLastName(){
    let returnval = true;
    let ErrorField = document.getElementById('lname-error');
    let lname = document.forms['signIn-form']['lname'].value;
    let lnameborder = document.forms['signIn-form']['lname']

    if(lname.trim().length < 4 || lname.trim() === ''){
        ErrorField.innerHTML = "*Last name is required";
        InvalidBorder(lnameborder);
        returnval = false;
    }
    else{
        ErrorField.innerHTML='';
        validBorder(lnameborder);
        returnval = true;
    }
    return returnval;
};
function validateEmail(){
    let returnval = true;
    let border = document.getElementById('input-box2');
    let regexForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    let ErrorField = document.getElementById('email-error');
    let email = document.forms['signIn-form']['email'].value;
    let emailborder = document.forms['signIn-form']['email'];

    if(!email.match(regexForEmail) || email.trim()===''){
        ErrorField.innerHTML="*Please Enter Valid Email ID";
        InvalidBorder(emailborder);
        returnval =false;
    }else{
        ErrorField.innerHTML="";
        validBorder(emailborder);
        returnval =true;
    }
    return returnval;
};
function validateNumber(){
    let returnval = true;
    let ErrorField = document.getElementById('number-error');
    let number = document.forms['signIn-form']['number'].value;
    let numberborder = document.forms['signIn-form']['number'];
    // console.log(number)
    if (isNaN(number) || number.trim() === '' || number.toString().trim().length < 8){
        ErrorField.innerHTML = '*Enter valid number';
        InvalidBorder(numberborder);
        returnval = false;
    }
    else{
        ErrorField.innerHTML = "";
        validBorder(numberborder);
        returnval = true;
    }
    return returnval;
};
function validatePass(){
    let returnval = true;
    let regExForPass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
    let ErrorField = document.getElementById('password-error');
    let pass = document.forms['signIn-form']['pass'].value;
    let PassBorder = document.forms['signIn-form']['pass']

    if(!pass.match(regExForPass) || pass.trim() === '' || pass.trim().length < 5){
        ErrorField.innerHTML = "*Please enter valid password";
        InvalidBorder(PassBorder);
        returnval = false;
    }
    
else {
    ErrorField.innerHTML=""
    validBorder(PassBorder);
    returnval = true;
}
return returnval;
};
function validateConfimPass(){
    let returnval = true;
    let ErrorField = document.getElementById('confim-password-error');
    let pass = document.forms['signIn-form']['pass'].value;
    let cpass = document.forms['signIn-form']['cpass'].value;
    let confimPassborder = document.forms['signIn-form']['cpass']
    if (pass !== cpass || cpass.trim()===''){
        ErrorField.innerHTML="*Password did not match"
        InvalidBorder(confimPassborder);
        returnval = false;
    }
    else {
        ErrorField.innerHTML= ""
        validBorder(confimPassborder);
        returnval = true;
    }
    return returnval;
};
function ValidateSchoolName(){
    let returnval= true;
    let schoolerror = document.getElementById('school-error');
    let schoolname = document.forms['signIn-form-2']['school'].value;
    let borderfield = document.forms['signIn-form-2']['school'];

    if (schoolname.trim().length <  8 || schoolname.trim() === ''){
        schoolerror.innerHTML = "*Invalid Name";
        InvalidBorder(borderfield);
        returnval = false;

    }
    else {
        schoolerror.innerHTML=""
        validBorder(borderfield);
        returnval = true;
    }
    return returnval;
}
function ValidateStateName(){
    let returnval= true;
    let stateError = document.getElementById('state-error');
    let stateName = document.forms['signIn-form-2']['state'].value;
    let borderfield = document.forms['signIn-form-2']['state'];

    if (stateName.trim().length <  3 || stateName.trim() === ''){
        stateError.innerHTML = "*Invalid state name";
        InvalidBorder(borderfield);
        returnval = false;

    }
    else {
        stateError.innerHTML=""
        validBorder(borderfield);
        returnval = true;
    }
    return returnval;
}
function ValidateCityName(){
    let returnval= true;
    let cityerror = document.getElementById('city-error');
    let cityname = document.forms['signIn-form-2']['city'].value;
    let borderfield = document.forms['signIn-form-2']['city'];

    if (cityname.trim().length <  3 || cityname.trim() === ''){
        cityerror.innerHTML = "*Invalid city name";
        InvalidBorder(borderfield);
        returnval = false;

    }
    else {
        cityerror.innerHTML=""
        validBorder(borderfield);
        returnval = true;
    }
    return returnval;
}
function ValidateCountryName(){
    let returnval= true;
    let countryerror = document.getElementById('country-error');
    let countryname = document.forms['signIn-form-2']['country'].value;
    let borderfield = document.forms['signIn-form-2']['country'];

    if (countryname.trim().length <  3 || countryname.trim() === ''){
        countryerror.innerHTML = "*Invalid country name";
        InvalidBorder(borderfield);
        returnval = false;

    }
    else {
        countryerror.innerHTML=""
        validBorder(borderfield);
        returnval = true;
    }
    return returnval;
}
function ValidateZipCode(){
    let returnval= true;
    let zipcodeerror = document.getElementById('zipcode-error');
    let zipcodename = document.forms['signIn-form-2']['zipcode'].value;
    let borderfield = document.forms['signIn-form-2']['zipcode'];

    if (isNaN(zipcodename) || zipcodename.trim() === '' || zipcodename.trim().length < 5){
        zipcodeerror.innerHTML = "*Zip Code should be numeric and of 5 or 6 digits only";
        InvalidBorder(borderfield);
        returnval = false;

    }
    else {
        zipcodeerror.innerHTML=""
        validBorder(borderfield);
        returnval = true;
    }
    return returnval;
}
function checkCheckBoxes() {
    let checkboxerror = document.getElementById('checkbox-error');
    let checkbox1 = document.forms['signIn-form-2']['checkbox'];
    if (checkbox1.checked == false) 
    {
        checkboxerror.innerHTML="*Please check the checkbox";
        return false;
    } else {
        checkboxerror.innerHTML='';    
        return true;
    }
}
