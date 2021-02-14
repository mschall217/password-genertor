//generator functions
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// char code set
//console.log(String.fromCharCode()); results in a 97-122 lowercase letters
//console.log(Math.random()*26); get a decimal between 1-26
//console.log(Math.floor(Math.random()*26)); will round down to get a number between 1-26
//console.log(Math.floor(Math.random()*26)+97); adding 97 will get it bewtween the char set data 97-122

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//uppers start at 65
//console.log(getRandomUpper());

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//0-9 start at 48 to 57 so we need 10 charcters and they start at 48
//console.log(getRandomNumber());

function getRandomSpecialChar() {
	const symbols = "!@#$%^&*(){}[]=<>/,.";
	return symbols[Math.floor(Math.random() * symbols.length)];
}
// need a string of all the random symbols that are password acceptable then multiplying by the length of the string makes the code sustainable if you need to add to take out symbols especially if some websites dont take certain symbols they can be easily removed and funciton will still run
// then the same process is applied with the Math floor and random functions
//console.log(getRandomSpecialChar());


const generateRandom = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	special: getRandomSpecialChar,
};
// object of our random functions


//DOM Elements
let generateBtn = document.querySelector("generate");
let result = document.getElementById("#placeholder");
let clipboardEL = document.getElementById("clipboard");

generate.addEventListener("click", () => {
	var userLength = prompt(
		"How many characters would you like your password to be? Enter a number between 8-128"
	);
	var userINT = parseInt(userLength, 10);
	console.log(typeof userINT); // checking if it converted the users input to a number
	var userLower = prompt(
		"Would you like to use lowercase letters? Enter Y or N"
	);
	userLower = userLower.toUpperCase();
	if (userLower === "Y") {
		var hasLower = true;
	} else {
		hasLower = false;
	}
	var userUpper = prompt(
		"Would you like to use uppercase letters? Enter Y or N"
	);
	userUpper = userUpper.toUpperCase();
	if (userUpper === "Y") {
		var hasUpper = true;
	} else {
		hasUpper = false;
	}
	var userNumber = prompt("Would you like to use numbers? Enter Y or N");
	userNumber = userNumber.toUpperCase();
	if (userNumber === "Y") {
		var hasNumber = true;
	} else {
		hasNumber = false;
	}
	var userSpecial = prompt("Would you like to use special characters? Y or N");
	userSpecial = userSpecial.toUpperCase();
	if (userSpecial === "Y") {
		var hasSpecial = true;
	} else {
		hasSpecial = false;
	}
	console.log(hasLower, hasUpper, hasNumber, hasSpecial, userINT);

	result = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSpecial,
		userINT,
	);
	console.log(result)
	document.getElementById("password").innerHTML = result;
});

// generate password function

function generatePassword(lower, upper, number, special, length) {
	// needed a function that would take in all the user's inputs
		//initalize pw variable string we will continuously build on to get password
		let generatedPassword = '';
		
		//filter out user wants / dont want
		const typesCount = lower + upper + number + special;
		// count the number of items the user does want
		const typesArr = [{lower}, {upper}, {number}, {special}].filter(item => Object.values(item)[0]);
		//create an array based on the prefered arrays, if they want it it adds to the new array
		//the array is full of objects based on the random functions 
		//the filter is a high order array method that loops through based on the true and false statements of each object  

		//a catch if they don't want any of the requests, well then there is no characters left to make a password 
		if(typesCount === 0) {
			alert("Cannot make a password with no characters! Try Again.")
		}
		
		//loop over the length, call a generator function for each type
		for(let i=0; i<length; i+=typesCount) {
			//for the loop we want as long as i is less than the length of the array we will increment based on the types of values they want to use 
			typesArr.forEach(type => {
				// loop through an array for each type we want the key to the funcName 
				const funcPassword = Object.keys(type)[0];
				//we are looking for the keys and pass in type becuase we are passing though the types array and we want the first value for 0 so upper lower number special 
				generatedPassword += generateRandom[funcPassword]();
				// we take the empty string and append by calling the generate and then call through the funcPassword
			});
		}
		
		const finalPassword = generatedPassword.slice(0, length);
		// add the final pw to the pw variable and return it
		return finalPassword;
}

	



