function registrarCliente() {

    var clientesRegistrados = JSON.parse(localStorage.getItem("clientes") || "[]")
   
    cliente = new Cliente()
    cedula = document.getElementById("cedula")
    cliente.cedula = cedula.value;

    nombre = document.getElementById("nombre")
    cliente.nombre = nombre.value;

    apellidos = document.getElementById("apellido")
    cliente.apellidos = apellidos.value;

    correoElectronico = document.getElementById("correoElectronico")
    cliente.correoElectronico = correoElectronico.value;

    contrasena = document.getElementById("contrasena")
    cliente.contrasena = contrasena.value;

    numeroCelular = document.getElementById("numeroDeCelular")
    cliente.numeroDeCelular = numeroCelular.value;

    fechaDeNacimiento = document.getElementById("fechaNacimiento")
    cliente.fechaNacimiento = fechaDeNacimiento.value;
  

    var registrado = true;

    for (const elemento of clientesRegistrados) {
        if(elemento.cedula == cliente.cedula){
            registrado = false;
  
            break;
        }
    }

    if(registrado == true){
        clientesRegistrados.push(cliente);
        localStorage.setItem("clientes", JSON.stringify(clientesRegistrados));
        window.location.href = "../index.html";

    }

    cedulaInput.focus()
    cliente.comprobarDatos();
}


function borrarDatos() {

    localStorage.removeItem("clientes");

    console.log("info borrada")

}


