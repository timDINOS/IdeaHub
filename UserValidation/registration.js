var validator = require('validator');
var empty = require('is-empty');
const isEmpty = require('is-empty');

module.exports = function checkInput(input) {
    let list_of_errors = {};

    if (!empty(input.name)) {
        input.name = "";
    }
    if (!empty(input.email)) {
        input.email = "";
    }
    if (!empty(input.password1)) {
        input.email = "";
    }
    if (!empty(input.password2)) {
        input.email = "";
    }

    if (validator.empty(input.name) == true) {
        list_of_errors.name = "ERROR: Name Not Entered!";
    }


    if (validator.empty(input.email) == true) {
        list_of_errors.email = "ERROR: Email Not Entered!";
    }
    else if (validator.empty(input.email) == false) {
        list_of_errors.email = "ERROR: Email Invalid!";
    }

    if (validator.empty(input.password1) == true) {
        list_of_errors.password1 = "ERROR: Password Not Entered!"
    }

    if (validator.empty(input.password2) == true) {
        list_of_errors.password2 = "ERROR: Password Not Entered Again!";
    }

    if (validator.isLength(data.password1,  {min: 7, max: 100}) == false) {
        list_of_errors.password1 = "ERROR: Password Not Long Enough!";
    }

    if (validator.equals(input.password1, input.password2) == false) {
        list_of_errors.password2 = "ERROR: Passwords Must Match!";
    } 

    var return_errors = {list_of_errors, isValid: isEmpty(list_of_errors)};

    return return_errors;
}