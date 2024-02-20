const express = require('express');
const app = express();
var bodyParser = require("body-parser")

let alunos =[{  id: 0, nome: "jose"},
{ id: 1, nome: "Maria" },
{ id: 2, nome: "Joao" },
{ id: 3, nome: "Marcos" }]

app.use(bodyParser.urlencoded())

app.get("/", (req, res) => {
    res.send("Hello Word")
})

app.get("/", (req, res) => {
    res.json("Hello Word")
})

app.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos))
})

app.get("/alunos", (req, res) => {
    console.log(req, res)
    let aluno = alunos[req.body.id]
    res.json(alunos)
})
app.listen(3000, () => 
    console.log('server running...'))