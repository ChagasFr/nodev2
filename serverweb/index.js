const http = require('http');

// criando a solicitacao e recebendo a resposta
http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end("Hello Word");
}).listen(3000, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Servidor")
    }
})