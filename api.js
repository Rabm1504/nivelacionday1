// La comunicación con las API (interfaz de programación de aplicaciones) es una parte clave del desarrollo web.
// Podemos enviar una petición con la función fetch() pasándole como argumento la URL del endpoint al cual queremos enviar la petición.
// De forma predeterminada, fetch enviará lo que se denomina una petición GET a la URL especificada, y responderá con una promesa.
// Una promesa representa el eventual cumplimiento o falla de un evento asincrónico.
// Luego, podemos usar otro método de JavaScript llamado .then() para retornar esta promesa.

// Ejemplo: 

fetch('https://url-del-endpoint')
  .then(response => response.json()) 
  .then(data => console.log(data))