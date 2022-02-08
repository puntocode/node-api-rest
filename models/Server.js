const express = require('express');
const cors = require('cors');


class Server{

    constructor(){
        this.app = express();  
        this.port = process.env.PORT;
        this.userPath = '/api/users'; //para saber las rutas que hay

        //Middlewares
        this.middlewares();


        //Rutas
        this.routes();
    }


    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }


    routes(){
        this.app.use('/api/users', require('../routes/user'));
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port);
        });
    }

}


module.exports = Server;