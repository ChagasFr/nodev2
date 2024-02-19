const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
    console.log(req.method)
    next()
})

let hello = (req, res) => {
    res.send("Hello world")
}

app.use("/", consoleBody)
app.get("/", consoleBody)
app.post("/", hello)

app.listen(3000, () => 
    console.log('server running'))