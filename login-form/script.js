let signupbtn = document.querySelector('.signupbtn');
let signinbtn = document.querySelector('.signinbtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text01 = document.querySelector('.text01');

signinbtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '0';  
    title.innerHTML = 'Sign in'; 
    text01.innerHTML = 'Lost password';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signupbtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '60px';  
    title.innerHTML = 'Sign up'; 
    text01.innerHTML = 'password Suggestions';
    signinbtn.classList.add('disable');
    signupbtn.classList.remove('disable');
    underline.style.transform = 'translateX(0px)';
});
