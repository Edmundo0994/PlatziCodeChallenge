const fs = require('fs') // filesystem
const csv = require('csv-parse')// Encargado de parsear
let array = []

const parseador = csv({
    delimiter: ',',// Delimitador, por defecto es la coma ,
    cast: true, // Intentar convertir las cadenas a tipos nativos
    comment: '#' // El carácter con el que comienzan las líneas de los comentarios, en caso de existir
})

parseador.on('readable', function () {
    let fila
    while (fila = parseador.read()) {
        array.push(fila)
    }
})

parseador.on('error', function (err) {
    console.error("Error al leer CSV:", err.message)
})

console.time('tiempo')
fs.createReadStream("../25.OrdenandoAndo.csv") // Abrir archivo
    .pipe(parseador) // Pasarlo al parseador a través de una tubería
    .on("end", function () {// Y al finalizar, terminar lo necesario
        array = array.flat(1)
        array.shift()
        const bubbleSort = arr => {
          const l = arr.length;
          for (let i = 0; i < l; i++ ) {
            for (let j = 0; j < l - 1 - i; j++ ) {
              if ( arr[ j ] > arr[ j + 1 ] ) {
                [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
              }
            }
          }
          return arr;
        };
        const result = bubbleSort(array)
        console.log(result)
        console.timeEnd('tiempo')
        parseador.end()
    })