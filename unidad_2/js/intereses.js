/**************************************************************************************
 * intereses.js
 * Lisandro Pérez
 *
 * Este archivo contiene la función que da soporte a la
 * pagina de intereses.
 **************************************************************************************/

//Función que genera la tabla de intereses

function generarTabla(form){
    var deposito;   // Acumulativo anual de depositos
    var tasa;       // Tasa de interes
    var anio;       // Número de años a calcular
    var tabla;      // Elemento para la tabla
    var i;          // Iterador de años
    var interes;    // Interes generado de manera anual

    deposito = form.elements["deposito"].valueAsNumber;
    tasa = form.elements["tasa"].valueAsNumber;
    anio = form.elements["anio"].valueAsNumber;
    tabla =
    "<table>"+
    "<tr><th>Año</th><th>Deposito Inicial</th>"+
    "<th>Interes Generado</th><th>Valor Final</th></tr>";

    i=1;
    while (i<=anio) {
        tabla += "<tr>";
        tabla += "<td>"; + i + "</td>";
        tabla += "<td>$ " + deposito.toFixed(2) + "</td>"; // 2 decimales
        interes = deposito * tasa / 100;
        tabla += "<td>$ " + interes + "</td>";
        deposito += interes;
        tabla += "<td>$ " + deposito + "</td>"
        tabla += "</tr>";
        i++;
    } // Fin while

    tabla += "</table>"
    document.getElementById("resultado").innerHTML = tabla;
} // Fin generarTabla

function c(clase){
    var c = document.getElementsByClassName(clase);
    // console.log(c);
}
c('row')