const express = require('express');
const path = require('path')

const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) => {
    res.send("<h1>Hello word from get<h1>");
})

app.post("/", (req, res) => {
    res.send("<h1>Hello word from post<h1>");
})

app.put("/", (req, res) => {
    res.send("<h1>Hello word from put<h1>");
})

app.delete("/", (req, res) => {
    res.send("<h1>Hello word from delete<h1>");
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port:${PORT}`)
})