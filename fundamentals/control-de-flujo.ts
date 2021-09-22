const a = 1
const b = 2

// If
if (a > b) {
  console.log(`a (${a}) es mayor que b (${b})`)
} else if (b > a) {
  console.log(`b (${b}) es mayor que a (${a})`)
} else {
  console.log(`a (${a}) y b (${b}) son iguales`)
}
if (a === 1) {
  console.log('a es Uno!')
}
if (b % 2 === 0) {
  console.log('b es Par!')
}
if (b !== 1) {
  console.log('b no es Uno!')
}

// For
const misNumeros = [1,2,7,15,23]
let suma = 0
for (let i = 0; i < misNumeros.length; i += 1) {
  suma += misNumeros[i]
}
console.log(suma)

// While
let primeroMasAltoQueDos
let i = 0
while (i <= misNumeros.length - 1) {
  if (misNumeros[i] > 2) {
    primeroMasAltoQueDos = misNumeros[i]
    break
  } else {
    i += 1
  }
}
console.log(primeroMasAltoQueDos)

// Las funciones de array son mucho más potentes que los bloques for y while
console.log('Suma: ' + misNumeros.reduce((total, n) => total + n, 0))
console.log('Primero mas alto que dos: ' + misNumeros.find(n => n > 2))

// Switch
const numero = 4
switch (numero) {
  case 1:
    console.log('Uno')
    break;
  case 2:
    console.log('Dos')
    break;
  case 3:
    console.log('Tres')
    break;
  case 4:
    console.log('Cuatro')
    break;
  default:
    console.log('No se, me canse de escribir ya')
    break;
}

