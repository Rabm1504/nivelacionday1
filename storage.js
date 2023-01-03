// El objeto Storage (API de almacenamiento web) nos permite almacenar datos de manera local en el navegador.
// Esto nos evita tener la necesidad de realizar alguna conexión a una base de datos.
// localStorage y sessionStorage son propiedades que acceden al objeto Storage.
// Su función es almacenar datos de manera local.

// localStorage almacena la información de forma indefinida o hasta que se decida limpiar los datos del navegador.

// Ejemplo:

// Opción 1 ->  localStorage.setItem(name, content)
// Opción 2 ->localStorage.name = content
// name = nombre del elemento
// content = Contenido del elemento

localStorage.setItem('Nombre', 'Miguel Antonio')
localStorage.Apellido = 'Márquez Montoya'

// sessionStorage almacena información mientras la pestaña donde se esté utilizando siga abierta.
// Una vez cerrada, la información se elimina.