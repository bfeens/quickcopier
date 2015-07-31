function textCopier() {			
	// Assign the value of the code you've styled to a variable. 	
	var blockValue = document.getElementById("codeblock-base").innerHTML; 
	// Assign the hidden input to that value. 
	document.getElementById("codeblock-input").value = (blockValue) 		 
	// Select the input.
	document.getElementById("codeblock-input").select();
	// Assign a variable, then copy the codeblock in the variable.
	var c = document.execCommand("copy");
		// Test if the variable is not empty from the copy. 
		if (c !== "") {
			// If the value has been populated, it's a successful copy on the console for posterity.
			console.log("Successful copy"); 
		} // Otherwise, alert the user that the copy failed, and 9/10 its the browser. 
			else {
			alert("It looks like your browser may not be supported to automatically copy.");
		}
	}

 