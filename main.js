// function preguntaPrecio (){
//     let precio = parseInt(prompt("Ingresa el precio"));
//     return precio;
// }

// function ingresoCantidad(){
//     let precioTotal = 0;
//     let cantidad = parseInt(prompt("Ingresa la cantidad de hamburguesas"));
//     for(let i = 1; i <= cantidad; i++){
//         precioTotal += preguntaPrecio();
//     }
//     return cantidad + " hamburguesas cuestan $" + precioTotal;
// }

// let ticket = ingresoCantidad();
// console.log(ticket);


const productos = [
    {
        nombre: "Classic burger",
        precio: 400,
    },
    {
        nombre: "Chicken burger",
        precio: 400,
    },
    {
        nombre: "Double burger",
        precio: 500,
    },
    {
        nombre: "Extra chesse burger",
        precio: 420,
    },
    {
        nombre: "Guacamole burger",
        precio: 415,
    },
    {
        nombre: "Not burger",
        precio: 400,
    },
]

function ingresoCantidad(arreglo){
    let cantidad = parseInt(prompt("Ingresa la cantidad de hamburguesas"));
    for(let i = 1; i <= cantidad; i++){
        let entrada = prompt("Ingresar nombre de la hamburguesa");
        for(let j= 0; j < arreglo.lenght; j++){
            if(entrada == arreglo[j].precio){
                console.log(arreglo[j].precio);
            }
        }
    }
}

ingresoCantidad(productos);




