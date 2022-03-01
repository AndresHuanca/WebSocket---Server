const express = require('express');
const cors = require('cors');
// import socket controller 
const { socketController } = require('../sockets/controller');


class Server {

    constructor() {

        this.app    = express();
        this.port   = process.env.PORT;
        // Import socket with express
        this.server = require('http').createServer( this.app );
        this.io     = require('socket.io')( this.server );

        this.paths  = {
            // auth:       '/api/auth', example
        };

        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
        // Sockets
        this.sockets();
    }


    // MIddlewares es una funcion que se ejecuta antes de llamar un controlador o un modelo
    middlewares() {
        //cors
        this.app.use( cors() );

        //lectura y parseo del body recibir de json
        this.app.use( express.json() );

        // directorio publico
        this.app.use( express.static('public') );

    }

    //siguiente ruta(get- put- post- delete)
    routes() {
        
        // this.app.use(  this.paths.auth, require('../routes/auth') );

    }
    // Sockets
    sockets() {

        this.io.on("connection", socketController );

    }

    listen() {
        // change app by server
        this.server.listen( this.port, () => {
        console.log('Hello World', this.port );
        });
    }

}

module.exports = Server;