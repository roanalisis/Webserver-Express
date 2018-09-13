const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'applicaction/json' });

    let salida = {
        nombre: 'Rodrigo',
        edad: 41,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();
})

.listen(8080);

console.log('Escuchando el puerto 8080');