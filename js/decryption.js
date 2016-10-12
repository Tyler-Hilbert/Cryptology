function decrypt() {
	var cipher = $('#cipher').find(":selected").val();

	var message = $('#encrypted-message').val();
	var key = $('#key').val();

	if (cipher === "caesar") {
		caesar(message, key);
	} else if(cipher === "polyalphabetic") {
		polyalphabetic(message, key);
	} else {
		otp(message, key);
	}
}


function caesar(message, key) {
	var decryptedMessage = "";

	for (var i = 0; i < message.length; i++) {
		if (message.charCodeAt(i) == 32) { // No shift occurred
			decryptedMessage += " ";
		} else {
			var low = 33; // The lowest ASCII value possible
			var high = 126; // The highest ASCII value possible
			decryptedMessage += shift(message[i], key, 33, 126);
		}
	}

	$('#decrypted-message').html("Decrypted message: " + decryptedMessage);
}


function polyalphabetic(message, seed) {
	var decryptedMessage = "";

	for (var i = 0; i < message.length; i++) {
		var low = 32; // Lowest possible ASCII value
		var high = 126; // Highest possible ASCII value
		decryptedMessage += shift(message[i], seed.charCodeAt(i%seed.length) - 32, low, high);
	}

	$('#decrypted-message').html("Decrypted message: " + decryptedMessage);
}

function otp(message, seed) {
	var keys = seed.split(",");
	var decryptedMessage = "";

	for (var i = 0; i < keys.length && i < message.length; i++) {
		var key = parseInt(keys[i].trim());
		decryptedMessage += shift(message[i], key, 32, 126);
	}

	$('#decrypted-message').html("Decrypted message: " + decryptedMessage);
}

/**
	Shifts the char based off the key and then puts it inside the range give
*/
function shift(chr, key, low, high) {
	var shiftedValue = chr.charCodeAt(0) - key;

	while (shiftedValue < low) {
		shiftedValue += high - low + 1;
	}

	while (shiftedValue > high) {
		shiftedValue -= high - low + 1;
	}

	return String.fromCharCode(shiftedValue);
}
