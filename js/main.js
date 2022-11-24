let firstName = document.getElementById("first_name")
let lastName = document.getElementById("last_name")
let email = document.getElementById("emial")
let password = document.getElementById("password")
let firstNameError = document.getElementById("name_error")
let lastNameError = document.getElementById("last_error")
let emialError = document.getElementById("emial_error")
let passwordError = document.getElementById("password_error")





document.getElementById("submit").onsubmit = function () {
    // first name 
    let namere = /[!@#$%^&*()_0-9]/g
    if (firstName.value == "") {
        firstNameError.innerHTML = "Name can't be empty"
        firstName.style.border = "1px solid red"
    } else if (firstName.value.match(namere) !== null) {
        firstNameError.innerHTML = "Name can't be have spcila chectar or number"
        firstName.style.border = "1px solid red"
    }
    else {
        firstNameError.innerHTML = ""
        firstName.style.border = "1px solid "
    }
    // last name
    if (lastName.value == "") {
        lastNameError.innerHTML = "last name can't be empty"
        lastName.style.border = "1px solid red"
    } else if (lastName.value.match(namere) !== null) {
        lastNameError.innerHTML = "last name can't be have spcila chectar or number"
        lastName.style.border = "1px solid red"
    }
    else {
        lastNameError.innerHTML = ""
        lastName.style.border = "1px solid "
    }
    // emial
    let valiledd = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (email.value == "") {
        emialError.innerHTML = "emial filed can't be empty"
        emial.style.border = "1px solid red"
    } else if (email.value.match(valiledd)) {
        emialError.innerHTML = ""
        email.style.border = "1px solid "
    } else {
        emialError.innerHTML = "please provide a vailed email"
        email.style.border = "1px solid  red"
    }
    // password
    let passwordre = /[!@#$%^&*()_]/g
    if (password.value == "") {
        passwordError.innerHTML = "Name can't be empty"
        password.style.border = "1px solid red"
    } else if (password.value.match(passwordre) !== null) {
        passwordError.innerHTML = "password can't be have spcila chectar"
        password.style.border = "1px solid red"
    }
    else {
        passwordError.innerHTML = ""
        password.style.border = "1px solid "
    }
    return false;
}