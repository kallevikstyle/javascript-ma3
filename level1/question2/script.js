//Console.log out elements in JSON file
function authorInfo(authorData) {
	let i = 0,
		x = 0;
	// Loop through videos in JSON file
	for (i = 0; i < authorData["video"].length; i++) {
		// Loop through all keys and values in each video
		for (videoKey in authorData["video"][i]) {
			// Check whether or not the value is an object/array
			if (typeof authorData["video"][i][videoKey] !== "object") {
				console.log("Video " + videoKey + ": " + authorData["video"][i][videoKey]);
			} else {
				// Loop through author object
				for (authorKey in authorData["video"][i][videoKey]) {
					// Loop through data array in author object
					for (x = 0; x < authorData["video"][i][videoKey][authorKey].length; x++) {
						// Loop through object in data array
						for (authorDataKey in authorData["video"][i][videoKey][authorKey])
							console.log("Info about author:")
							// Loop through keys in object
							for (authorDataObjectKey in authorData["video"][i][videoKey][authorKey][authorDataKey]) {
								console.log(authorDataObjectKey + 
									": " + 
									authorData["video"][i][videoKey][authorKey][authorDataKey][authorDataObjectKey]);
							}
					}
				}
			}
		}
	}
}

/*
Student's comments:

Firstly, I chose to access the JSON file via JSONP, instead of copying it into the script. To me, that feels more realistic.

So, this task really had me going for a few hours.
I am guessing this is not the easiest way to solve the problem, but at least I accomplished what I wanted,
which was to log an overview of the contents of the JSON file.

I also tried to make the code flexible for more videos to be added to the JSON file later.

*/