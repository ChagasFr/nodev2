const http = require('http');
const url = require('url');
const fs = require('fs')

// criando a solicitacao e recebendo a resposta
http.createServer((request, response) => {
    let path = url.parse(resquest.url).pathname;
    let fileName = "." +  path;

    fs.readFile(fileName, (err, data ) => {
        if(err) {
            response.writeHead(404, {"content-type":"text/html"});
            response.end("pagina nao encontrada")
        }
    })
    response.end()

}).listen(3000, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Servidor")
    }
})