saludo = "Hola Mundo"
saludo2 = "Hola \"Mundo\" "
saludo3 = saludo + saludo2

document.write(saludo3 + "<br>")

numero = "42"
document.write(numero + "<br>")

document.write("numero: " + typeof numero + "<br>")

numero = numero + "hola"
// document.write(typeof numero + "<br>")

numero = 43
    //numero++
numero %= 2
// document.write(numero + "<br>")

//Funciones

function multiplicar(a, b) {
    return a * b
}

resultado = multiplicar(2, 8)

// document.write(resultado + "<br>")

url = document.links.mi_enlace.href
// document.write(url + "<br>")
//console.log(url)

enlace = document.getElementById("mi_enlace").href
// document.write(enlace + "<br>")
//console.log(enlace)

function $(id){
    return document.getElementById(id)
}

link = $(mi_enlace)
console.log(link + "<br>")


/* Matrices*/
juguetes = ['pelota', 'muñeca']

top = ['R', 'A', 'G']
medio = ['G', 'A', 'B']
abajo = ['A', 'G', 'A']

cara = [top, medio, abajo]

document.write(cara[2][1] +"<br>")

/* Operadores de comparación

    ==
    !=
    >
    <
    >=
    <=
*/

var j = 10;
// document.write("a) " +(j==3) + "<br>")
// document.write("b) " +(j!=3) + "<br>")
// document.write("c) " +(j>3) + "<br>")
// document.write("d) " +(j<3) + "<br>")
// document.write("d) " +(j>=3) + "<br>")
// document.write("d) " +(j<=3) + "<br><br>")

/* Operadores Lógicos

    &&
    ||
    !
*/

document.write("a) " +(j==10) + "<br>")

/* Declaración with*/
var cadena = "Hoy es un día nublado"
with(cadena){
    document.write("Longitud de cadena: " + length + "<br>")
    document.write("En mayusculas: " + toUpperCase() + "<br>")
}

document.write("Longitud de cadena: " + cadena.length + "<br>")
document.write("En mayusculas: " + cadena.toUpperCase() + "<br>")

/* Condicionales
    if
    switch
    ternario
*/

if(j==10){
    document.write("Son iguales" + "<br>")
}
else{
    document.write("Son diferentes" + "<br>")
}

if(j==8) document.write("Son iguales" + "<br>")
else document.write("Son diferentes" + "<br>")

long = j < cadena.length ? "menor" + "<br>":"mayor" + "<br>"
document.write("Operador ternario: "+long + "<br>")

var edad = 17
var mayor = j >= 18 ? "Es mayor de edad": "Es menor de edad"

document.write(mayor + "<br>")

/* Inicio | Noticia | Acerca de | Inicio Sesión */

var opcion = "Noticias"
switch (opcion) {
    case "Inicio":
        document.write("Selecciono Inicio <br>")
        break;
    case "Noticias":
    case "Acerca de":
        document.write("Selecciono Noticias o Acerca de <br>")
        break;
    case "Inicio Sesion":
        document.write("Selecciono Iniciar Sesión <br>")
        break;
    default:
        document.write("Opcion no valida <br>")
        break;
}

/* BUCLES */

var contador = 0
while(contador < 5){
    document.write("<br>contador: " + contador)
    contador++
}

document.write("<br>")

contador = 1
do{
    document.write(contador + " por 6 es igual a: "+contador*6 +"<br>")
}while(++contador <=10)

document.write("<br><br>")

for (var i = 1, j=20; i <=10; i++, j--) {
    document.write(i + " por 6 es igual a: " + (i*6) + "<br>")
}