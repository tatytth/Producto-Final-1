Autora:	Tatiana Tudela Hernández
Squad:	Galácticas

subproceso función principal
	Hacer
		Solicita valor de número de opción; 
		var respuesta = valor de número de opción introducido;
		Si respuesta es distinta a valor vacio;
			Si entonces si respuesta es igual a 1
				Ejecutar subproceso función cipher;
			Fin Si;
			Si entonces si respuesta es igual a 2
				Ejecutar subproceso función decipher;
			Fin Si;
		Fin Si;
		Si no entonces Imprime "Ingrese una opción válida.";
		Fin Si no;
	Mientras respuesta distinta a valor vacio o (respuesta distinto a 1 y respuesta distinto a 2)
Fin subproceso función principal

subproceso función cipher 	
	var newTxt = cadena vacía;
	Solicita la cadena de texto a cifrar; 
	var txt = cadena de texto que desea cifrar;
		Para i < 0 hasta 26 con paso 1 Hacer
		findLetter <- número del valor del carácter en el índice i de la cadena de texto proporcionado;					findLetter <- (((findLetter-65)+33)%26) + 65;
		newTxt <- newTxt + valor del caracter obtenido en la posición i;
			Si  valor del carácter en el índice de la cadena i es igual a valor vacio			
				newTxt <- newTxt + valor de cadena espacio;
			Fin Si;
		Fin Para;
	Muestra el texto de alerta "El texto cifrado es: " y el valor de newTxt;
Fin subproceso función cipher

subproceso función decipher 	
	var newTxt = cadena vacía; 
	Solicita la cadena de texto a decifrar;
	var txt = cadena de texto que desea decifrar;
		Para j < 0 hasta 26 con paso 1 Hacer
		findLetter <- número del valor del carácter en el índice j de la cadena de texto proporcionado;					findLetter <- (((findLetter-65)-7+52)%26+65);
		newTxt <- newTxt + valor del caracter obtenido en la posición j;
			Si  valor del carácter en el índice de la cadena j es igual a valor vacio			
				newTxt <- newTxt + valor de cadena espacio;
			Fin Si;
		Fin Para;
	Muestra el texto de alerta "El texto cifrado es: " y el valor de newTxt;
Fin subproceso función decipher
![Diagrama de flujo CesarCipher](http://imageshack.com/a/img924/7905/RUtAno.jpg)