var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var msgError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("name").value
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Invalid Name Format"
        return false
    }
    nameError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
    return true;

}

function validatePhone() {
    var phone = document.getElementById("phone").value;
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone number is required.";
        return false;
    } if (phone.length < 10) {
        phoneError.innerHTML = "Enter valid Phone number";
        return false;

    }
    phoneError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("email").value;
    if (email.length === 0) {
        emailError.innerHTML = "Email is required.";
        return false;
    }
    if (!email.match(/^[A-Za-z._-]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        emailError.innerHTML = "Email is invalid.";
        return false;

    }
    emailError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    return true;

}

function validateMessage() {
    var msg = document.getElementById("msg").value;
    var left = 40 - msg.length;
    if (msg.length === 0) {
        msgError.innerHTML = "Messgae is required";
        return false
    }
    if (left > 0) {
        msgError.innerHTML = `${left} words are required`;
        return false
    }
    msgError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    return true;

}

function validateForm() {
    if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {
        submitError.style.dsplay = "block";
        submitError.innerHTML = "please fix error to submit";
        setTimeout(function () { submitError.style.display = 'none'; }, 3000)
        return false;

    }
}