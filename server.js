const express = require("express")
const app = express()
const port = 3000
app.get("/", (req, res) => {
    res.send("Hola mundo")
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})