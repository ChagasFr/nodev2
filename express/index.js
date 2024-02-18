const express = require('express');

const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) => {
    res.send("hello word")
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port:${PORT}`)
})