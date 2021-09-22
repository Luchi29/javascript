const a = "123"
let b = '123'

b = '456'

// a = 456 -> Ilegal

console.log(a)
console.log(b)

const verdadero = true
const falso = false

// Object literal
const pato = {
  nombre: 'Geronimo',
  color: 'blanco',
  edad: 5
}

console.log(`Mi pato se llama ${pato.nombre}, es de color ${pato.color} y tiene ${pato['edad']} años`)

// Array literal
const numeros = [1,2,3,4,5]

console.log(`El último número es ${numeros[4]}`)
console.log(`El último número es ${numeros[numeros.length - 1]}`)


// Spread (objetos)
const pata = {
  ...pato,
  nombre: 'Filomena',
  colorDePico: 'naranja'
}

console.log(`Mi pata se llama ${pata.nombre}, es de color ${pata.color}, tiene ${pata.edad} años y su pico es de color ${pata.colorDePico}`)

// Spread (arrays)
const masNumeros = [...numeros, 6, 7, 8]
console.log(`El último número es ${masNumeros[masNumeros.length - 1]}`)

let variableNoAsignada
console.log(variableNoAsignada)

let variableNull = null
console.log(variableNull)
