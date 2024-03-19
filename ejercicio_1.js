/* Escribir un programa que lea un archivo de texto y muestre su contenido en la consola. */

const fs = require("fs");

/* Creamos una función que recibe como párametro el nombre del archivo */

fs.readFile("archivo.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
