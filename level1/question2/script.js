function authorInfo(authorData) {
	let vid = 0,
		auth = 0;

	// Loop through all video arrays
	for (vid in authorData.video) {
		// Log out info about video
		console.log("Video " + (parseInt(vid) + 1));
		console.log("ID: " + authorData.video[vid].id);
		console.log("Name: " + authorData.video[vid].name);
		console.log("URL: " + authorData.video[vid].url);

		// Loop through data array inside author
		for (auth in authorData.video[vid].author.data) {
			// Log out info about author
			console.log("Author:");
			console.log("Name: " + 
				authorData.video[vid].author.data[auth].name_author);
			console.log("URL: " + 
				authorData.video[vid].author.data[auth].url);
			console.log("Type: " + 
				authorData.video[vid].author.data[auth].type);
		}
	}
}

/*
Student's comments:

Even though the assignment brief suggested to copy the JSON data
into the script, I chose to access the JSON file through JSONP.
It just feels more realistic to do it this way.

I also tried to make the script generic, so that it would
still work when more videos and authors are added to the JSON file.
*/