var validator = require('validator');
var empty = require('is-empty');


module.exports = function checkInput(input) {
    var list_of_errors = {};
    if (empty(input.email)) {
        input.email = "";
    }
    if (empty(input.email)) {
        input.password = "";
    }

    if (validator.isEmpty(input.email)) {
        list_of_errors.email = "ERROR: NO Email Entered!";
    }
    else if (validator.isEmail(input.email) == false) {
        list_of_errors.email = "ERROR: Email Invalid!";
    }

    if (validator.isEmpty(input.password)) {
        list_of_errors.password = "ERROR: No Password Entered!";
    }

    var results = {list_of_errors, isValid: empty(list_of_errors)};
    return results;
};