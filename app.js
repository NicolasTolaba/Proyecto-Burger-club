const burgers = [
    {
        img: "img/imagenes/bgclasic-min.jpg",
        nombre: "Classic burger",
        precio: 400,
    },
    {
        img: "img/imagenes/bgchicken-min.jpg",
        nombre: "Chicken burger",
        precio: 400,
    },
    {
        img: "img/imagenes/bgdoble-min.jpg",
        nombre: "Double burger",
        precio: 500,
    },
    {
        img:"img/imagenes/bgquesera-min.jpg",
        nombre: "Extra chesse burger",
        precio: 420,
    },
    {
        img: "img/imagenes/bgguacamole-min.jpg",
        nombre: "Guacamole burger",
        precio: 415,
    },
    {
        img: "img/imagenes/bgnot-min.jpg",
        nombre: "Not burger",
        precio: 400,
    },
]

const contenedorProductos = document.getElementsByClassName("burgerItem")


burgers.forEach((burgers) => {
    const img = document.createElement("img")
    img.className = "img"

    img.innerHTML = `
            <img src=${burgers,img} alt="Hamburguesa clásica">
                                <div class="contenidoCarta">
                                    <h2>${burgers.nombre}</h2>
                                    <h4>Hamburguesa con un medallon de carne (100gr), feta de queso cheddar, lechuga, tomate, pepinos y salsa burgerclub.</h4>
                                </div>
                                <div id="precio">
                                    <p>$${burgers.precio}</p>
                                </div>
                                <button class="compra">AGREGAR AL CARRITO</button>`

})

// Form
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementsById("input1");
const inputCorreo = document.getElementsById("inputCorreo");
const inputConsulta = document.getElementsById("consulta");

console.log("hola")
formulario.addEventListener('submit', () => {
    const nombre = inputNombre.value
    const correo = inputCorreo.value
    const consulta = inputConsulta.value

    alert( "formulario enviado" )
})