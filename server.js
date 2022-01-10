// express http request
const express = require('express');

//permite trabajar con el cuerpo de la peticion request
const bodyParser = require('body-parser');

const response = require('./network/response');

// router express permite generar los Metodos GET PUT DELETE POST PATCH OPTIONS
const router = express.Router();

// creando la aplicacion con express add los metodos y la forma de trabajar el cuerpo de la aplicacion
var app = express();
app.use(bodyParser.json());
app.use(router);

router.get("/message", (req, res) =>{
    // console.log(req.headers)
    // res.header({"custom-header":"Nuestro header personalizado"})
    // console.log(req.query);
    // console.log(req.body);
    response.success(req, res, "solicitado desde Get");
});

router.post("/message", (req,res) =>{
    if(req.query.error == "ok"){
        response.error(req, res, "Error simulado", 400)
    }else{
        response.success(req, res, "creado correctamente", 201)
    }
})

router.delete("/message", (request, response) =>{
    response.status(201).send();
})

// app.use('/', function (req, res){
//     res.send('hola');
// });

app.listen(3000);
console.log('La aplicación esta escuchando http://localhost:3000')