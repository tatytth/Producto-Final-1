function isValidCard(){
do {
  var cardNumber = prompt("Digite el número de su tarjeta por favor:");
      if (cardNumber != ""){
 
          var array = []; 

          for (var i=0; i<cardNumber.length; i++){     // Pasa los números a un array 
                array.push(cardNumber.charAt(i));
              }
              
          newArray = parseInt(array.reverse());        // Cambia el array al orden inverso

          var singleNumber = []; 
          var doubleNumber = []; 
          var finalArray = [];
          var sum = 0;
          

          for (var i=0; i<cardNumber.length; i++){     // Aplica la operación a los números de las posiciones pares
                if (i%2 === 0) {
                  singleNumber.push(cardNumber[i]);
                }
                else{
                  doubleNumber.push((cardNumber[i]*2).toString());
                }
              }
            doubleNumber = doubleNumber.join("").split("");

            finalArray = doubleNumber.concat(singleNumber);

            for (var j=0; j<finalArray.length; j++){   // Suma los dígitos impares y los nuevos dígitos pares operados
              sum += parseInt(finalArray[j], 10);
            }

            if (sum % 10 === 0) {                      //Comprueba si es una tarjeta válida
              alert ("Tarjeta válida");
              alert (sum);
            }
            else{
              alert ("Tarjeta inválida");
            }
                   
                // Para 3625102593804 devuelve: "Tarjeta válida"

      } else {
              alert("Ingrese un número válido por favor.");
            }
  } while (cardNumber == "");
}

isValidCard ();
