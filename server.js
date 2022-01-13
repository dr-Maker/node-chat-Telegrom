// express http request
const express = require('express');
// creando la aplicacion con express add los metodos y la forma de trabajar el cuerpo de la aplicacion
const app = express();
const server = require("http").Server(app);


//permite trabajar con el cuerpo de la peticion request
const bodyParser = require('body-parser');
const db = require('./db');
// router express permite generar los Metodos GET PUT DELETE POST PATCH OPTIONS
const router = require("./network/routes");

db('mongodb://localhost:27017/bd_telegrom');


app.use(bodyParser.json());
// app.use(router);

router(app);

app.use("/app", express.static('public'));

server.listen(3000, ()=>{
    console.log('La aplicación esta escuchando http://localhost:3000')
});