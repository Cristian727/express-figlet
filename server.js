const express = require("express")
const { exec } = require('child_process')
//const comando = 'ping -c 4 google.com'
const app = express()
const port = 3000

//const comando = 'mkdir carpetaRandom';
const comando = "figlet hola mundo"
//const comando = 'echo "Hola mundo" > Test.txt'


app.get("/", (req, res) => {
    exec(comando, (error, stdout, stderr) => {
    //console.log(error, stdout, stderr)
    console.log(`Stdout: ${stdout}`)
    res.send(`<pre>${stdout}</pre>`)
    })
})


app.listen(port, () => {
    console.log('Servidor escuchando en el puerto 3000');
})