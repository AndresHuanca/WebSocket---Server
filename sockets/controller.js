
const socketController = ( socket ) => {
    console.log( 'Client Connection ', socket.id );

    socket.on('disconnect', () => {
        console.log( 'Client no Connection ', socket.id );
    });

    // send mesage from the front
    socket.on( 'enviar-mensaje', ( payload, callback ) => {
        
        const id = 12345678;
        callback( id );
        
        // envia el msm a todos los clients
        socket.broadcast.emit( 'enviar-mensaje', payload );

    });

};

module.exports = {
    socketController
};