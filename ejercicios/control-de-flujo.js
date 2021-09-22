// No modificar los edificios
const edificios = [
  {
    pisos: 1,
    edad: 16,
    nombre: 'Casa de Pepito',
    direccion: 'Calle Falsa 123'
  },
  {
    pisos: 5,
    edad: 10,
    nombre: 'Hospital',
    direccion: 'Avenida Sarlanga 2401'
  },
  {
    pisos: 20,
    edad: 6,
    nombre: 'Rascacielos',
    direccion: 'Boulevard Inventado 742'
  },
  {
    pisos: 6,
    edad: 27,
    nombre: 'Deparatamentos',
    direccion: 'Calle Bonita 3421'
  },
  {
    pisos: 15,
    edad: 1,
    nombre: 'Penthouses',
    direccion: 'Avenida Larga 6321'
  },
  {
    pisos: 32,
    edad: 2,
    nombre: 'Oficinas',
    direccion: 'Distrito Comercial 4, Torre 3'
  },
]

// Una funcion que devuelva un string
//  que indique el nombre y dirección de los edificios
// En la string resultante los nombres y direcciones deben estar ordenados
//  en orden alfabético por el nombre del edificio
// Debe haber una linea por edificio
//   :: Los saltos de linea se ingresan con \n
// Se deben excluir los edificios con edad par y con menos de 10 pisos
// Ejemplo de resultado:
//    Algun edificio, Calle Falsa 123
//    Otro edificio, Calle Falsa 321
function leerEdificios() {
  return edificios.sort((a,b) => {
    const nombreA = a.nombre.toUpperCase();
    const nombreB = b.nombre.toUpperCase();
    if(nombreA > nombreB) return 1;
    if(nombreA < nombreB) return -1;
    return 0;

  })
  .filter(e => e.edad%2 === 0)
  .filter(e => e.pisos >= 10)
  .map(e => `${e.nombre}, ${e.direccion}`)
  .reduce((prev, e) => `${prev}${e}\n`, '')


}

module.exports = leerEdificios