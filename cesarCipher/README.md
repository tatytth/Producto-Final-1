Autora:	Tatiana Tudela Hern�ndez
Squad:	Gal�cticas

subproceso funci�n principal
	Hacer
		Solicita valor de n�mero de opci�n; 
		var respuesta = valor de n�mero de opci�n introducido;
		Si respuesta es distinta a valor vacio;
			Si entonces si respuesta es igual a 1
				Ejecutar subproceso funci�n cipher;
			Fin Si;
			Si entonces si respuesta es igual a 2
				Ejecutar subproceso funci�n decipher;
			Fin Si;
		Fin Si;
		Si no entonces Imprime "Ingrese una opci�n v�lida.";
		Fin Si no;
	Mientras respuesta distinta a valor vacio o (respuesta distinto a 1 y respuesta distinto a 2)
Fin subproceso funci�n principal

subproceso funci�n cipher 	
	var newTxt = cadena vac�a;
	Solicita la cadena de texto a cifrar; 
	var txt = cadena de texto que desea cifrar;
		Para i < 0 hasta 26 con paso 1 Hacer
		findLetter <- n�mero del valor del car�cter en el �ndice i de la cadena de texto proporcionado;					findLetter <- (((findLetter-65)+33)%26) + 65;
		newTxt <- newTxt + valor del caracter obtenido en la posici�n i;
			Si  valor del car�cter en el �ndice de la cadena i es igual a valor vacio			
				newTxt <- newTxt + valor de cadena espacio;
			Fin Si;
		Fin Para;
	Muestra el texto de alerta "El texto cifrado es: " y el valor de newTxt;
Fin subproceso funci�n cipher

subproceso funci�n decipher 	
	var newTxt = cadena vac�a; 
	Solicita la cadena de texto a decifrar;
	var txt = cadena de texto que desea decifrar;
		Para j < 0 hasta 26 con paso 1 Hacer
		findLetter <- n�mero del valor del car�cter en el �ndice j de la cadena de texto proporcionado;					findLetter <- (((findLetter-65)-7+52)%26+65);
		newTxt <- newTxt + valor del caracter obtenido en la posici�n j;
			Si  valor del car�cter en el �ndice de la cadena j es igual a valor vacio			
				newTxt <- newTxt + valor de cadena espacio;
			Fin Si;
		Fin Para;
	Muestra el texto de alerta "El texto cifrado es: " y el valor de newTxt;
Fin subproceso funci�n decipher
![Diagrama de flujo CesarCipher](http://imageshack.com/a/img924/7905/RUtAno.jpg)