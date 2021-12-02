//Funciones 

// Funciones regulares 
//La palabra reservada: funtion 
//Tienen un nombre: nameFunction
// parámetros:(valores)


/* funciones nombradas
function nameFunction (parametro1, parametro 2) {Instrucciones de código a ejecutar}
nameFunction (); para ejecutar

*/

function saludar (){alert('Hola, que gusto verte de nuevo');console.log ('si ejecuta la función') }


function saludarA (nombre){alert(`hola ${nombre}, que bien te ves`)
console.log('funcion con parametros')}
saludar();
saludarA('cecilia');

// se usan las `` invertidas cuando se trabaha con variables


/*funciones anonimas

function nameFunction (parametro1, parametro 2) {Instrucciones de código a ejecutar}

pueden ser guardadas dentro de variables

const nameFunction (parametro1, parametro 2)

*/

const sumaDeDos = function (){console.log(2+2)}
const suma = function(num1,num2){console.log(num1 + num2)}

sumaDeDos ();
suma(5,7);


const obtenerNombre = function(){
    const nombre = prompt('Cuál es tu nombre?');
  
    return nombre;
  }
  
  saludarA(obtenerNombre());
  

  //funciones flecha

/*flecha que sustituye la palabra function

llaves que agrupan las lineas a ejecutar 
const nameFunction = () =>{}
*/

  const resta = (num1,num2) => {console.log (num1 - num2);}

  resta (10,6);


  //SCOPE: alcance que van a tener mis indicaciones cualquier función

  const nombreKey ='Keyla';
  const obtenerApellido = () =>{
const apellido = prompt ('Cuál es tu apellido?');
return apellido;

  }

  console.log (nombreKey); //Muestra Keyla
/*  console.log (apellido); //Muestra error porque no puede encontrar apellido */
console.log(obtenerApellido())


/* Parametros:
Deben nombrarse adecuadamente siguiendo las mismas bases que variables y funnciones
Los parametros que no se usan en la ejecucion van a ser ignorados 
Por default son aquellos que no reciben valor,  agarran el definido */

const multiplicar =(num1, num2 = 2) => {
    console.log (num1 * num2);
}
multiplicar (5,4); //enviando todos los argumentos
multiplicar (7); // Haciendo uso del parametro por default

const despedida = (name ="Desconocido") =>{console.log(`Hasta luego, ${name}`)}

