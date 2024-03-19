/* Lectura archivo Node.js */

/* Creación de un script de nodejs para leer archivos de texto  */

/* Importamos el modulo fs de nodejs */
const fs = require("fs");

/* Creamos una función que recibe como párametro el nombre del archivo */
/* function fs = requier('fs'); */

fs.readFile("archivo.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

/* Escritura de archivos con Node.js */
/* const fs = require("fs");
const data = "Esta es una prueba de escriturade archivo"; */

/* fs.writeFile("archivo.txt", "Hola mundo", (err) => {
  if (err) throw err;
  console.log("Archivo escrito correctamente");
}); */

/* Creación de un directorio  */
/* const fs = require("fs");

fs.mkdir("nuevo_directorio", (err) => {
  if (err) throw err;
  console.log("Directorio creado correctamente");
}); */