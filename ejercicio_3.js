/* Escribe un programa que cree un directorio y luego copie un archivo a ese directorio */

const fs = require("fs");

fs.mkdir("directorio_ejercicio_3", (err) => {
  if (err) throw err;
  console.log("Directorio creado correctamente");
});

fs.copyFile("archivo.txt", "directorio_ejercicio_3/archivo.txt", (err) => {
  if (err) throw err;
  console.log("Archivo copiado correctamente");
});
