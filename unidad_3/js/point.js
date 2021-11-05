class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        if (Point.count == undefined) {
            Point.count = 1;
        } else if (Point.count == 1) {
            Point.count = 2;
        }
    }

    value() {
        return "(" + this.x + "," + this.y + ")";
    }

    static getCount() {
        return (Point.count == undefined ? 0 : Point.count);
    }

    static distancia(pt1, pt2) {
        var xDist, yDist;
        var distancia;

        if (Point.count == 2) {
            xDist = pt1.x - pt2.x;
            yDist = pt1.y - pt2.y;
            distancia = Math.sqrt(xDist * xDist + yDist * yDist);
        } else {
            distancia = null;
        }
        return distancia;
    }

    static reduceCount() {
        if (Point.count == 1) {
            Point.count = undefined;
        } else if (Point.count == 2) {
            Point.count = 1;
        }
    }
}

var point1, point2;

function capturarClick(e) {
    if (Point.getCount() == 0) {
        // Vamos a crear nuestro primer punto
        point1 = new Point(e.clientX, e.clientY);
        document.getElementById("pt1").innerHTML = point1.value();
    } else if (Point.getCount() == 1) {
        // Vamos a crear nuestro segundo punto
        point2 = new Point(e.clientX, e.clientY);
        document.getElementById("pt2").innerHTML = point2.value();
    } else {
        //Ciclar puntos
        point1 = point2;
        point2 = new Point(e.clientX, e.clientY);
        document.getElementById("pt1").innerHTML = point1.value();
        document.getElementById("pt2").innerHTML = point2.value();
    }
}

function mostrarDistancia(e) {
    var distancia;
    var mensaje;

    e.stopPropagation();
    distancia = Point.distancia(point1, point2);

    if (distancia == null) {
        mensaje = "Para calcular la distancia, primero crea 2 puntos";
    } else {
        mensaje =
            "La distancia en pixeles entre los puntos es: " + distancia.toFixed(1);
    }

    document.getElementById("mensaje").innerHTML = mensaje;
}

function eliminarPunto(e) {
    if (e.key == "Delete") {
        if (Point.getCount() == 1) {
            document.getElementById("pt1").innerHTML = "";
            Point.reduceCount();
        } else if (Point.getCount() == 2) {
            document.getElementById("pt2").innerHTML = "";
            Point.reduceCount();
        }
    }
}

document.addEventListener("click", capturarClick);
document.addEventListener("keydown", eliminarPunto);
