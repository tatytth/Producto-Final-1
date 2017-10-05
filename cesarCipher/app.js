function principal(){
	do {
		var respuesta = prompt("Indique la opción que desea realizar: 1. Cifrar 2. Decifrar");
		if (respuesta != ""){
			if (respuesta == "1"){
				cipher();
			} else if(respuesta == "2"){
				decipher();
			} else {
				alert("Ingrese una opción válida.");
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));

}


function cipher (){
	
	var newTxt = ""; 
	var txt = prompt("Escriba el texto que desea cifrar:");

		for (var i =0; i < 26; i++){

			var findLetter = txt.charCodeAt(i);				// Obtiene el código ASCII de las letras del texto.
			findLetter = (((findLetter-65)+33)%26) + 65;	// Aplica la fórmula (x + n) % 26.
			newTxt += String.fromCharCode(findLetter);		// Obtiene la letra en las posiciones halladas.
				if (txt[i] == " "){
					newTxt += " ";
				}

		}
		alert ("El texto cifrado es: " + newTxt);

}

function decipher (){
	
	var newTxt = ""; 
	var txt = prompt("Escriba el texto que desea descifrar:");

		for (var j =0; j < 26; j++){

			var findLetter = txt.charCodeAt(j);				// Obtiene el código ASCII de las letras del texto.
			findLetter = (((findLetter-65)-7+52)%26+65) 	// Aplica la fórmula (x - n) % 26.
			newTxt += String.fromCharCode(findLetter);		// Obtiene la letra en las posiciones halladas.
				if (txt[j] == " "){
					newTxt += " ";
				}

		}
		alert ("El texto descifrado es: " + newTxt);

}

principal ();


