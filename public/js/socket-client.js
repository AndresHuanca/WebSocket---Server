// References fron the html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

// connect socket
const socket = io();

socket.on( 'connect', () => {

    // console.log( 'connect from the server' );
    
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on( 'disconnect', () => {

    // console.log( 'disconnect from the server' );
    
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';

});

//Listen front of back
socket.on( 'enviar-mensaje', ( payload ) => {
    console.log( payload );
}); 



// Button
btnEnviar.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id:'123456',
        fecha: new Date().getTime()
    };
    
    // Send mesage
    socket.emit( 'enviar-mensaje', payload, ( id ) => { 
        console.log( 'desde el server', id  );
    });

});