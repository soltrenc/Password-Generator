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

    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var upperChar = lowerChar.toUpperCase();
    var specialChar = "!#$5^&*()+-/<>_";
    var numbers = "0123456789";

    var minChar = 8;
    var maxChar = 128;

    var guaranteeChar = []

    while (true) {
        var passLength = prompt("Please enter the length you want your password to be between 8 and 128 characters.");
        if (!isNaN(passLength)) {
            if (passLength >= 8 && passLength <= 128) {
                break;
            } else {
                alert("Please choose a number between 8 and 128.")
            }
        } else {
            alert("Choose a number fool!")
        }
    }

    while (true) {
        var lower = confirm("Do you want to have lower case characters in your password?");
        var upper = confirm("Do you want to have upper case characters in your password?");
        var special = confirm("Do you want to have special characters in your password?");
        var num = confirm("Do you want to use numbers in your password?");
        if (lower === false && upper === false && special === false && num === false) {
            alert("Must choose at least one condition!")
        } else {
            break;
        }
    }

    var charStr = ""

    function genStr(a, b) {
        if (a) { charStr += b }
    }

    genStr(lower, lowerChar)
    genStr(upper, upperChar)
    genStr(special, specialChar)
    genStr(num, numbers)

    if (special) {
        guaranteeChar.push(specialChar)
    }
    if (num) {
        guaranteeChar.push(numbers)
    }

    if (lower) {
        guaranteeChar.push(lowerChar)
    }

    if (upper) {
        guaranteeChar.push(upperChar)
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

