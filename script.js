// alert("Hola este es mi Javascript");
let nombre = "INTEC Soluciones en Tecnología";

//console.log(nombre)



// console.log(titulo.innerHTML)

let titulo = document.querySelector(".header-txt h1");


if (nombre == "INTEC"){
    titulo.innerHTML = nombre;
}else{
    console.log("NO SE CUMPLE")
}


let ciudad = "Polonuevo - Atlantico" ;
let parrafo = document.querySelector(".header-txt p");

function cambiarTexto(ciudad, nombre){
    let contenido = `Somos <strong>${nombre}</strong>, una empresa ubicada en ${ciudad}, dedicada a prestar servicios que genere completa satisfacción a sus clientes. con amplia experiencia en desarrollo de páginas WEB, Software, y todo lo relacionado con Hardware.`;

    return contenido;
}

parrafo.innerHTML = cambiarTexto(ciudad, nombre);


let menu_responsive = document.querySelector("#menu");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};



const form = document.getElementById("form");
const frmNombre = document.getElementById("nombre");
const alertParrafo = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    alertParrafo.innerHTML = "";
    if (frmNombre.value.length < 4) {
        warnings += `El nombre debe contener más de 4 carcateres`;
        valido = false;
    }

    if (!valido) {
        alertParrafo.innerHTML = warnings;
    } else {
        alertParrafo.innerHTML = "Enviado";
    }
    return valido;
}

    form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        // Si la validación es exitosa, puedes enviar el formulario
        formulario.submit();
    } else {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
});




