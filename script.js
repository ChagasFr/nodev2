let soma = require("./soma")
let soma = require("./mult")

let args = process.argv.slice(2);

let a = number(args[1]);
let b = number(args[2]);
let c = "";

if (args[0] == 's') {
    c = soma(a, b);
} else if (args[0] === 'm') {
    c = mult(a, b);
} else {
    c = "opcao invalida"
}

console.log(c)