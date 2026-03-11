let form = document.querySelector("#form");

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");
let passwordInput = document.querySelector("#password");

let nameError = document.querySelector("#nameError");
let emailError = document.querySelector("#emailError");
let phoneError = document.querySelector("#phoneError");
let strength = document.querySelector("#strength");


// NAME VALIDATION
nameInput.addEventListener("input", () => {
    if(nameInput.value.length < 3){
        nameError.innerText = "Name must be atleast 3 characters";
    }else{
        nameError.innerText = "";
    }
});


// EMAIL VALIDATION
emailInput.addEventListener("input", () => {

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!emailInput.value.match(pattern)){
        emailError.innerText = "Invalid Email";
    }else{
        emailError.innerText = "";
    }

});


// PHONE VALIDATION
phoneInput.addEventListener("input", () => {

    let pattern = /^[0-9]{10}$/;

    if(!phoneInput.value.match(pattern)){
        phoneError.innerText = "Enter 10 digit phone number";
    }else{
        phoneError.innerText = "";
    }

});


// PASSWORD STRENGTH
passwordInput.addEventListener("input", () => {

    let pass = passwordInput.value;

    if(pass.length < 4){
        strength.innerText = "Weak Password";
    }
    else if(pass.length < 8){
        strength.innerText = "Medium Password";
    }
    else{
        strength.innerText = "Strong Password";
    }

});


// SHOW HIDE PASSWORD
let toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {

    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        toggle.innerText = "Hide";
    }else{
        passwordInput.type = "password";
        toggle.innerText = "Show";
    }

});


// FORM SUBMIT
form.addEventListener("submit", (e) => {

    e.preventDefault();

    let data = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        password: passwordInput.value
    };

    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    submissions.push(data);

    localStorage.setItem("submissions", JSON.stringify(submissions));

    alert("Registration Successful");

    form.reset();

});