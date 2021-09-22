function suma(a: number, b: number): number {
  return a + b
}

const resta: (a: number, b: number) => number = (a, b) => a - b
const multiplicacion: (a: number, b: number) => number = (a,b) => 
   a * b;


console.log(suma(1, 2))
console.log(resta(5, 4))
console.log(multiplicacion(2, 6))