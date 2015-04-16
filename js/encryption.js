function encrypt() {
	var message = document.getElementById('message').value;
	var encryptedMessage = "";
	var randomKey = Math.floor((Math.random() * 65535));
	
	for (var i = 0; i < message.length; i++) {
		var charAscii = (message.charCodeAt(i) + randomKey) % 65535;
		encryptedMessage += String.fromCharCode(charAscii);
	}
	
	document.getElementById('encrypted-message').innerHTML = "Key: " + randomKey + ", " + encryptedMessage;
}



// Ascii value 65535