const express = require('express')
const app = express()

app.get('/', function(req, res) {

})

app.listen(3000, () => {
    console.log("Escuchando puerto ", 3000);
});