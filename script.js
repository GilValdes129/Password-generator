// Assignment Code
var generateBtn = document.querySelector("#generate");
var PasswordLowerCase

//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
function generatePassword(){
  //Variables to create the password
  var length = window.prompt("Between 8 and 128 characters. How long would you like your new password?");
  var PasswordLowerCase = window.confirm("Would you like to use lower case for your password");
  var PasswordUpperCase = window.confirm("Would you like to use upper case for your password");
  var PasswordNumber = window.confirm("Would you like to use numbers for your password");
  var PasswordSpecialCharacters = window.confirm("Would you like to use specials characters for your password");
  var chars = "qwertyuiopasdfghjklzxcvbnm";
  var upperchars = chars.toUpperCase()
  var numbers = "0123456789"
  var specialchar = "!#$%&'()*+,-./:;<=>?@[^]\ _`{|}~"
  var Passwordchars = []
  var password = ""

  // In cas the password length is not correct
  if (length < 8 || length > 128){
    window.alert("Length too short or to long");
    document.location.reload();
  }

  //In case the user does not choose any criteria
  if (PasswordLowerCase == false && PasswordUpperCase == false && PasswordNumber == false && PasswordSpecialCharacters == false){
    window.alert("Choose at least one criteria");
    document.location.reload();
  }

  //Add the criteria into a array
  if (PasswordLowerCase == true){
    Passwordchars.push(chars);
  } 
  if (PasswordUpperCase == true){
    Passwordchars.push(upperchars);
  }
  if (PasswordNumber == true){
    Passwordchars.push(numbers);
  }
  if (PasswordSpecialCharacters == true){
    Passwordchars.push(specialchar);
  }

  //Combine an array into a single string
  var PasswordcharsString = Passwordchars.join("")
  

  var array = new Uint32Array(length);
  window.crypto.getRandomValues(array)
  
  for (var i=0; i < length; i++){
    password = password + PasswordcharsString[array[i] % PasswordcharsString.length]
  }
  
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
