const contenedorCarrito = document.getElementById('contenedor-carrito')

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
    <h3 class="precio">$${producto.precio}</h3>
    <button class="comprar-btn" id="agregar${producto.id}">¡VOY!</button>
    `
    contenedorCarrito.appendChild(div)


})