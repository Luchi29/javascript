// Una funcion que suma todos sus argumentos
// De todos los parámetros sumar solo los números
//  y las strings si son representaciones de números válidas
function sumarStringsONumeros (...argumentos) {
    //con reduce
    return argumentos.filter(elemento => typeof elemento === 'string' || typeof elemento === 'number')
        .map(Number)
        .filter(elemento => !Number.isNaN(elemento))
        .reduce((total, n) => total + n, 0);
        
    }
   
    //con bucle for
    /*let suma = 0;
    for(let i = 0; i < argumentos.length; i += 1)
    const elemento = argumentos[i]
        if(typeof(elemento) === 'number') {
            suma += elemento
        } else if (elemento === true && !Number.isNaN(Number(elemento)) === true){
            suma += Number(elemento)

        }

        return suma;
        */


//Number('123') === 123;
//Number('asd') // nan // para checkear si es un numero
//Number.isNaN(Nan) === true;

module.exports = sumarStringsONumeros