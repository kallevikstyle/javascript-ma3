function validateInfo() {
	const regExPhone = /^[0-9]{8}$/,
		  regExEmail = /^[a-z0-9.-_]+@[a-z0-9-]+\.[a-z.]{2,5}$/i,
		  regExName = /^[a-z ]+$/i;
	let validHuman = {
		"first name": 		regExName.test(document.getElementById('firstname').value),
		"last name": 		regExName.test(document.getElementById('lastname').value),
		"phone number": 	regExPhone.test(document.getElementById('phone').value),
		"e-mail": 			regExEmail.test(document.getElementById('email').value)  
	},
		invalidValues = [],
		i = 0;
	
	// loop through validHuman object to find any false values
	for (key in validHuman) {
		if (!validHuman[key]) {	// Add any false values to an array 
			invalidValues.push(key);
		} 
	}

	// console log an error message for every invalid value
	if (invalidValues.length > 0) {
		for (i = 0; i < invalidValues.length; i += 1) {
			console.log("You have entered an invalid " + invalidValues[i] + ".");
		} 
	} else {
		console.log("Everything looks good! Thank you for subscribing!");
	}
	
}