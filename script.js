// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var passLength = parseInt(prompt("Please enter the length you want your password to be between 8 and 128 characters."));

    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var upperChar = lowerChar.toUpperCase();
    var specialChar = "!#$5^&*()+-/<>_";
    var numbers = "0123456789";

    var minChar = 8;
    var maxChar = 128;

    var guaranteeChar = []

    if (isNaN(passLength)) {
        alert("Choose a number fool!")
    }

    else if (passLength < minChar) {
        alert("Password needs to be at least 8 characters or more.")

    }

    else if (passLength > maxChar) {
        alert("Password needs to be 128 characters or less.")
    }

    else {
        var lower = confirm("Do you want to have lower case characters in your password?");
        var upper = confirm("Do you want to have upper case characters in your password?");
        var special = confirm("Do you want to have special characters in your password?");
        var num = confirm("Do you want to use numbers in your password?");

    }

    if (lower === false && upper === false && special === false && num === false) {
        alert("You didn't choose any character types!")
    }

    else {

        var charStr = ""

        function genStr(a, b) {
            if (a) { charStr += b }
        }

        genStr(lower, lowerChar)
        genStr(upper, upperChar)
        genStr(special, specialChar)
        genStr(num, numbers)

    }

    if (special) {
        guaranteeChar.push(specialChar[0])
    }
    if (num) {
        guaranteeChar.push(numbers[0])
    }

    if (lower) {
        guaranteeChar.push(lowerChar[0])
    }

    if (upper) {
        guaranteeChar.push(upperChar[0])
    }

    var passStr = ""

    for (var i = 0; i < passLength; i++) {
        var x = Math.floor(Math.random() * charStr.length);
        passStr += charStr[x];
    }

    for (var i = 0; i < guaranteeChar.length; i++) {
        passStr[i] = guaranteeChar[i];
    }

    return passStr

}


