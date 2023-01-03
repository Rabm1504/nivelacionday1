// Un método es una función que se encuentra dentro de un objeto. Por ejemplo:

const persona = {
  nombre: 'Juan',
  edad: 30,
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

persona.saludar();

// En este ejemplo, saludar es un método del objeto persona.
// En cambio, una función es un bloque de código que puede ser invocado en cualquier parte de un programa. Por ejemplo:

function sumar(a, b) {
  return a + b;
}

console.log(sumar(1, 2)); 

// En este caso, sumar es una función que recibe dos parámetros y devuelve la suma de ambos.