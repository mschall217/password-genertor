// // Assignment Code
// var generateBtn = document.querySelector("#generate");
 
// // Write password to the #password input
// var upperCase = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z'];
// var lowerCase = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'];
// var useNumbers = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
// var specialCharacters = ['!' , '@' , '#' , '$' , '%' , '^' , '&' , '*' , '(' , ')' , '?' , '<' , '>' , '/' ];




// function writePassword() {
  
//   var passwordLength = prompt("How many characters would you like your password to contain? (enter a number between 8-128")
//   if(passwordLength < 8 || passwordLength > 128){
//     alert("Length must be between 8 and 128 characters Please try again.")
//     }if(passwordLength >= 8 || passwordLength <= 128){
//       var useUpperCase = prompt("Would you like to use uppercase letters?")

//     }if(){
//       var useLowerCase = prompt("Would you like to use lowercase letters?")

//     }if(){
//       var useNumbers = prompt("Would you like to use numbers?")

//     }if(){
//       var useSpecialChar = prompt("Would you like to use special characters?")
      
//     }
//   // return to get it to stop the loop of asking
//   else{

   
//   }
// }

//   function getRandomCharacter(arr){
//       var randomLetter = Math.floor(Math.random()*(arr.length));
//       console.log(randomLetter);
//       var randomChar = arr[randomLetter];
//   }

//   function generatePassword(){
//     var userWants = writePassword();
//     var result = [];
//     if(useUpperCase === true){

//     } if(useLowerCase === true){

//     } if(useNumbers === true){

//     } if(useSpecialChar === true){

//     }
//   }


// // write password 
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// dont nee event listener for the alerts what you want to generate the password 
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);




const randomFunc ={
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSpecialChar
}
// object of our random functions 



//DOM Elements

const result = document.getElementById('result');
const clipboardEL = document.getElementById('clipboard');

function writePassword(){
  var userLength = prompt('How many characters would you like your password to be? Enter a number between 8-128');
  userLength = +userLength.value;
  console.log(typeof userLength); // checking if it converted the users input to a number 
  var userLower = prompt('Would you like to use lowercase letters? Enter Y or N');
  userLower = userLower.toUpperCase();
  if(userLower === 'Y'){
    var hasLower = true;
  }
  else{
    hasLower = false;
  }
  var userUpper = prompt('Would you like to use uppercase letters? Enter Y or N');
  userUpper = userUpper.toUpperCase();
  if(userUpper === 'Y'){
    var hasUpper = true;
  } else{
    hasUpper = false;
  }
  var userNumber = prompt('Would you like to use numbers? Enter Y or N');
  userNumber = userNumber.toUpperCase();
  if(userNumber === 'Y'){
    var hasNumber = true;
  } else{
    hasNumber = false;
  }
  var userSpecial = prompt('Would you like to use special characters? Y or N');
  userSpecial = userSpecial.toUpperCase();
  if(userSpecial === 'Y'){
    var hasSpecial = true;
  } else  {
    hasSpecial = false;
  }
  console.log(hasLower, hasUpper, hasNumber, hasSpecial);

  var result = generatePassword(hasLower, hasUpper, hasNumber, hasSpecial, userLength);
}
console.log(writePassword());


// generate password function
  //initalize pw variable string we will continuously build on to get password 
  //filter out user wants / dont want
  //loop over the length, call a generator function for each type 
  // add the final pw to the pw variable and return it 
  function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    //console.log(typesCount);
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    //console.log(typesArr);
    // Doesn't have a selected type
    if(typesCount === 0) {
      return '';
    }
    
    // create a loop
    for(var i=0; i<length; i+=typesCount) {
      typesArr.forEach(type => {
        var funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
    console.log(generatedPassword);
    var finalPassword = generatedPassword.slice(0, length);
    
    return finalPassword;
    console.log(finalPassword);
  }





//generator functions
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}


// char code set 
//console.log(String.fromCharCode()); // results in a 97-122 lowercase letters 
//console.log(Math.random()*26); //get a decimal between 1-26
//console.log(Math.floor(Math.random()*26)); // will round down to get a number between 1-26
//console.log(Math.floor(Math.random()*26)+97); // adding 97 will get it bewtween the char set data 97-122 


function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
//uppers start at 65
//console.log(getRandomUpper());

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
//0-9 start at 48 to 57 so we need 10 charcters and they start at 48
//console.log(getRandomNumber());

function getRandomSpecialChar(){
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// need a string of all the random symbols that are password acceptable then multiplying by the length of the string makes the code sustainable if you need to add to take out symbols especially if some websites dont take certain symbols they can be easily removed and funciton will still run
// then the same process is applied with the Math floor and random functions 
//console.log(getRandomSpecialChar());