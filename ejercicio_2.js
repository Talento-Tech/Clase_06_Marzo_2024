/* Escribe un programa que cree un archivo de texto con el contenido que el usuario introduzca por teclado */

/* Creación de un directorio  */
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Introduce el contenido del archivo: ", function (data) {
  fs.writeFile("ejercicio2.txt", data, (err) => {
    if (err) throw err;
    console.log("Archivo escrito correctamente");
    rl.close();
  });
});