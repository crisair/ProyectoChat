

// declaramos las variables  poniendo el id  en los contenedores  de html
let ContenedorChat = document.getElementById("ContenedorChats");
let btnNuevoChat = document.getElementById("newChat");

function CrearNuevoChat(){
    // asi se crea el nuevo div 
    const nuevoChat = document.createElement("div");
    nuevoChat.className = "Container__Chat__elementos"; // con className se le asigna  la clase para que tome el estilo
    

    const imgChat = document.createElement("img");
    imgChat.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"; // Asignar la URL de la imagen
    imgChat.className = "Chat__img"; // Asignar la clase de la imagen del chat
    
    var br = document.createElement('br');

    const contenedor_h2_p = document.createElement("div");
    contenedor_h2_p.className = "Container__Chat__1";

    //  si se le asisgna el nombre y se le pone estilo
    const nombreChat = document.createElement("h2");
    nombreChat.innerText = "nuevo contacto"; //   le agrega el nombre 
    nombreChat.className = "Container__Chat__h2";

    const horaChat = document.createElement("h2");
   horaChat.innerText = "9:30"; //   le agrega  una hora 
    horaChat.className = "Container__Chat__h2";


    const textoChat =document.createElement("p");
   textoChat.innerText = " hola como estas"; //   le agrega el nombre 
   textoChat.className = "Container__Chat__p";


    
    
    // Agrega la imagen y el nombre al nuevo chat
    nuevoChat.appendChild(imgChat);
    nuevoChat.appendChild(contenedor_h2_p);
   nuevoChat.appendChild(br);
    nuevoChat.appendChild(horaChat);
    nuevoChat.appendChild(nombreChat);
   nuevoChat.appendChild(br);
    nuevoChat.appendChild(textoChat);
    
    
    // Agregar el nuevo chat al contenedor de chats
    ContenedorChat.appendChild(nuevoChat);
}

// para escucha el evento y ejecutar la acccion de la funcion 
btnNuevoChat.addEventListener("click", CrearNuevoChat);

/************************************************************************ */
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el área de chat y el campo de entrada de mensaje
    var chatArea = document.getElementById("areachat");
    var mensajeInput = document.getElementById("mensajeInput");
    var botonEnter = document.getElementById("enter");

    // Función para enviar un mensaje
    function enviarMensaje() {
        var mensaje = mensajeInput.value; // Obtener el mensaje y eliminar espacios en blanco al inicio y al final
        if (mensaje !== "") { // Verificar si el mensaje no está vacío
            // Crear un nuevo elemento de mensaje
            var nuevoMensaje = document.createElement("div");
            nuevoMensaje.innerText = mensaje;

            // Agregar el nuevo mensaje al área de chat
            chatArea.appendChild(nuevoMensaje);

            // Limpiar el campo de entrada de mensaje
            mensajeInput.value = "";
        }
    }

    // Agregar evento click al botón "Enter" para enviar el mensaje
    botonEnter.addEventListener("click", enviarMensaje);
});

