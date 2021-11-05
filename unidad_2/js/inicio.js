function $(id){
    return document.getElementById(id)
}

function saludo(){
    var mensaje = $("mensaje")
    mensaje.innerHTML = "<h1>Hola Mundo!!</h1>"
    console.log(mensaje)
}

function generarCorreo(form){
    var nombre = $("nombre").value
    var app = $("app").value

    $("correo").innerHTML += nombre+"."+app+"@itz.edu.mx"
    form.reset()
    form.elements["nombre"].focus()
    form.elements["app"].disabled=true

}