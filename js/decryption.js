function caesar() {
	var message = document.getElementById('encrypted-message').value;
	var key = document.getElementById('key').value;
	var decryptedMessage = "";
	
	for (var i = 0; i < message.length; i++) {
		if (message.charCodeAt(i) == 32) { // No shift occurred
			decryptedMessage += " ";
		} else { 
			// Shift the ASCII value within the range of 33 to 126(the valid ASCII values).
			var shiftedValue = message.charCodeAt(i) - key; // Not within 33 to 126 range
			
			// Move shiftedValue to range between 33 and 126
			while (shiftedValue < 33) {
				shiftedValue += 94;
			}
			
			while (shiftedValue > 126) {
				shiftedValue -= 94;
			}
			
			decryptedMessage += String.fromCharCode(shiftedValue);
		}
	}
	
	document.getElementById('decrypted-message').textContent = "Decrypted message: " + decryptedMessage;
}