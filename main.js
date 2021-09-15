
function ingresoCantidad(pregunta){
    var cantidad = prompt(pregunta);
    var cantidadInt = parseInt(cantidad);
    return cantidad;
}

function preguntaPrecio (preguntaCosto){
    var entrada = prompt(preguntaCosto);
    var entradaInt = parseInt(entrada);
    while(entrada != "no"){
        entrada = prompt("Ingresar siguiente precio")
        entradaInt = parseInt(entrada)
    }
}

function suma (){
    var total = numeroCan + preguntaPrecio2
    return total
}

var numeroCan = ingresoCantidad("ingresa cantidad de hamburguesas")
var preguntaPrecio2 = preguntaPrecio("Ingrese el precio de las hamburguesas")
console.log(suma())

