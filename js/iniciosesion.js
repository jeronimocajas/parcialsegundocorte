function ingresar(){
    var usuarioHallado = false;

    cedulaInput = document.getElementById ("cedula")
    contrasena = document.getElementById ("contrasena")
    


    valorCedula = cedulaInput.value;
    valorContrasena = contrasena.value;

    console.log(valorCedula,"----",valorContrasena)

    var clienteRegistrado =  JSON.parse(localStorage.getItem("clientes") || "[]");



    
    for (const cliente of clienteRegistrado ){

        console.log(cliente.contrasena)

        if (cliente.cedula == valorCedula && cliente.contrasena == valorContrasena ){
            usuarioHallado = true
            window.location.href = "html/paginaP.html"
            break;
        }
    }


    if (usuarioHallado == false){
        alert("Usuario o contraseña incorrecta")
    }

    cedulaInput.focus();
}

