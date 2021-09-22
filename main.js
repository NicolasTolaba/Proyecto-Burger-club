function preguntaPrecio (){
    let precio = parseInt(prompt("Ingresa el precio"));
    return precio;
}

function ingresoCantidad(){
    let precioTotal = 0;
    let cantidad = parseInt(prompt("Ingresa la cantidad de hamburguesas"));
    for(let u = 1; i <= cantidad; i++){
        precioTotal += preguntaPrecio;
    }
    return cantidad + " hamburguesas cuestan $" + precioTotal;
}

let ticket = ingresoCantidad();
console.log(ticket);

