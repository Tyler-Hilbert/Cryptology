function encrypt() {
	var message = document.getElementById('message').value;
	var key = document.getElementById('key').value;
	
	caesar(message, key);
	polyalphabetic(message, key);
	oneTimePad(message, key);
}

function caesar(message, key) {
	var encryptedMessage = "";
	key = parseInt(key);

	for (var i = 0; i < message.length; i++) {
		if (message.charCodeAt(i) == 32) { // Don't shift spaces to give away the shift key
			encryptedMessage += "  ";
		} else { 
			// Shift the ASCII value within the range of 33 to 126(the valid ASCII values).
			var charAscii = ((message.charCodeAt(i) - 33 + key) % 94) + 33;
			encryptedMessage += String.fromCharCode(charAscii);
		}
	}
	
	document.getElementById('caesar-encrypt').textContent = "Caesar cipher: " + encryptedMessage;
}

function polyalphabetic(message, seed) {
	var encryptedMessage = "";

	
	for (var i = 0; i < message.length; i++) {
		// Shift the ASCII value within the range of 32 to 126(the valid ASCII values).
		var charAscii = ((message.charCodeAt(i) + seed.charCodeAt(i % seed.length) -  64) % 95) + 32;
		encryptedMessage += String.fromCharCode(charAscii);
	}
	
	document.getElementById('polyalphabetic-encrypt').textContent = "Polyalphabetic cipher: " + encryptedMessage;	
}

function oneTimePad(message, key) {
	// Parse list of keys
	var keys = key.split(",");
	for (var i = 0; i < keys.length; i++) {
		keys[i] = parseInt(keys[i].trim());
	}
	
	var encryptedMessage = "";
	
	// Encrypt
	for (var i = 0; i < message.length && i < keys.length; i++) {
		// Shift the ASCII value within the range of 32 to 126(the valid ASCII values).
		var charAscii = ((message.charCodeAt(i) + keys[i] - 32) % 95) + 32;
		encryptedMessage += String.fromCharCode(charAscii);
	}
	
	document.getElementById('one-time-pad-encrypt').textContent = "One time pad cipher: " + encryptedMessage;	
	
}