const express = require('express');
const app = express();
var bodyParser = require("body-parser")

app.get("/", (req, res, next) => {
    console.log(req.body)
    next()
})

let hello = (req, res) => {
    res.send("Hello world")
}

app.use("/", bodyParser.json())
app.use("/", consoleBody)
app.get("/", consoleBody)
app.post("/", hello)

app.listen(3000, () => 
    console.log('server running'))