let stockViajes = [
    {id: 0, destino: "Florianópolis", alojamiento: "Hotel Porto Sol", dias: 8, desayuno: "Incluye desayuno", precio: 95000, imagen: '../assets/img/viaje-0.webp'},
    {id: 1, destino: "Bariloche", alojamiento: "Hotel Panamericano", dias: 7, desayuno: "Incluye desayuno", precio: 48000, imagen: '../assets/img/viaje-1.webp'}, 
    {id: 2, destino: "Salta", alojamiento: "Hotel Posada del Sol", dias: 7, desayuno: "No incluye desayuno", precio: 38000, imagen: '../assets/img/viaje-2.webp'},
    {id: 3, destino: "San Rafael", alojamiento: "Hotel Nutibara", dias: 7, desayuno: "Incluye desayuno",precio:30500, imagen: "../assets/img/viaje-3.webp", stock: true},
    {id: 4, destino: "San Martín de los Andes", alojamiento: "Patagonia Plaza", dias: 7, desayuno: "Incluye desayuno", precio: 110000, imagen: "../assets/img/viaje-4.webp"},
    {id: 5, destino: "Villa Carlos Paz", alojamiento: "Hotel Capvio", dias: 4, desayuno: "No incluye desayuno", precio: 23000, imagen: "../assets/img/viaje-5.webp"},
    {id: 6, destino: "Río de Janeiro", alojamiento: "Royalty Rio Hotel", dias: 8, desayuno: "No incluye desayuno", precio: 100000, imagen: "../assets/img/viaje-6.webp"},
    {id: 7, destino: "San Miguel de Tucumán", alojamiento:"Hotel Premier", dias: 4, desayuno:"Incluye Desayuno", precio: 32000, imagen: "../assets/img/viaje-7.webp"},
    {id: 8, destino: "Mendoza", alojamiento: "Hotel Piazza", dias: 4, desayuno: "No incluye desayuno", precio: 30000, imagen: "../assets/img/viaje-8.webp"}
]

const contenedorViajes = document.getElementById('contenedor-viajes')

carrito = []

stockViajes.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('viaje-card')
    div.innerHTML = `
    <h3 class="viaje-title">${producto.destino}</h3>
    <img class="img-viaje" src=${producto.imagen} alt="">
    <div class="info-completa">
        <p>${producto.alojamiento}</p>
        <p>${producto.dias} días</p>
        <p>${producto.desayuno}</p>
    </div>
    <h3 class="precio">$${producto.precio}</h3>
    <button class="comprar-btn" id="agregar${producto.id}">¡VOY!</button>
    `
    contenedorViajes.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener("click", ()=>{
        agregarAlCarrito(producto.id)
    })
})


const agregarAlCarrito = (prodId) => {
    const item = stockViajes.find((prod )=> prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
} 


const contenedorCarrito = document.getElementById("contenedor-carrito")

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('viaje-card')
        div.innerHTML = `
        <h3 class="viaje-title">${producto.destino}</h3>
        <img class="img-viaje" src=${producto.imagen} alt="">
        <div class="info-completa">
        <p>${producto.alojamiento}</p>
        <p>${producto.dias} días</p>
        <p>${producto.desayuno}</p>
        </div>
        <button class="comprar-btn" onclick="eliminarCarrito(${producto.id})">Eliminar</button>
        `
        contenedorCarrito.appendChild(div)
    })

}

const eliminarCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}