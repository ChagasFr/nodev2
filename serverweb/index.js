const http = require('http');
const url = require('url');
const fs = require('fs')

function handleFile(req, res, callbackS) {

    let path = url.parse(req.url).pathname;
    let fileName = "." +  path;

    fs.readFile(fileName, (err, data ) => {
        if(err) {
            if(callback) {
                if (!callback(req. res)) {
                    res.writeHead(404, {"content-type":"text/html"});
                    res.end("pagina nao encontrada")
                }
            }

        } else {
            res.writeHead(200, {"content-type":"text/html"});
            res.write(data);
            res.end();
        }
    })
}

function handleRequest(req, res) {
    let path = url.parse(req.url).pathname;

    let method = req.method;

    if(path == "/teste") {
        res.end("teste");
        return true;
    }
    return false;
}

// criando a solicitacao e recebendo a resposta
http.createServer((request, response) => {
    handleFile(request, response, handleRequest);

}).listen(3000, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Servidor")
    }
})