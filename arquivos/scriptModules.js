let fs = require('fs');

// criando arquivo e utilizando argumentos
fs.appendFile('teste.txt', 'Hello Word', function(error) {
    if(error) throw error;
})