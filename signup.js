let active1 = document.getElementById('active-1');
let active2 = document.getElementById('active-2');
let element = document.getElementById('next-step');
let step1 = document.getElementById('step-1');
let step2 =document.getElementById('step-2');
let stepback = document.getElementById('step-back');
element.addEventListener("click", function (e){
    // active1.classList.remove('active');
    //  active2.classList.add('active');
    step1.classList.add('card-hide');
    step2.classList.remove('card-hide');
});

stepback.addEventListener('click', function(e){
    // active1.classList.add('active');
    // active2.classList.remove('active');
    step2.classList.add('card-hide');
    step1.classList.remove('card-hide');
});

