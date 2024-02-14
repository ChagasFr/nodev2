let calc = require ("./calc.js")
let args = process.argv.slice(2);

let a = number(args[1]);
let b = number(args[2]);
let c = "";

if (args[0] == 's') {
    c = calc.soma(a, b);
} else if (args[0] === 'm') {
    c = calc.mult(a, b);
} else {
    c = "opcao invalida"
}

console.log(c)