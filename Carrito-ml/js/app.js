// variables 

const carrito = document.querySelector('#carrito');

const contenedorCarrito = document.querySelector('#lista-carrito tbody');

const listarCursos = document.querySelector('#lista-cursos');


const VaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    // cuando agregas un producto presionando "Agregar"
    listarCursos.addEventListener('click', agregarProducto);


    // elimina Cursos del carrito 

    carrito.addEventListener('click', eliminarCurso)


    // vaciar Carrito

    VaciarCarritoBtn.addEventListener('click', () => {
         articulosCarrito = [];

         limpiarHTML();
    })
}


// funciones 

function agregarProducto(e) {

    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        /* console.log(e.target.parentElement.parentElement) */

        const productoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCursos(productoSeleccionado);
    }

}


// ELIMNINA
function eliminarCurso(e) {
    /* console.log('desde elimina Cursos'); */

    if(e.target.classList.contains('borrar-curso')){
        const productoId = e.target.getAttribute('data-id');

        // eliminar del arreglo 
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId );

        carritoHTML();

    }
}

// Lee el contenido HTML al que le dimos click y extrae la informacion del curso

function leerDatosCursos(producto) {
    /* console.log(curso) */

    // crear un objeto con el contenido del curso actual 

    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('p').childNodes[0].textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }


    //CANTIDAD
    // revisa si un elemento ya existe en el carrito ,SOME=  Comprueba si exite o no  un elemento
    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);

    

/*     console.log(existe); */

if(existe) {
    // actualizamos la cantidad
    const productos = articulosCarrito.map(producto => {
        if(producto.id === infoProducto.id) {
                producto.cantidad++;
                return producto;  // retorna el objeto actualizado
        }else {
            return producto; // retorna los objetos que no son los duplicados
        }
    })

    articulosCarrito = [...productos]

}else {
    // agregamos el curso al carrito
    articulosCarrito = [...articulosCarrito, infoProducto]
}


    /* console.log(infoCurso) */


    // Agregar elementos al arreglo, no perder la referencia a los cursos

   /*  articulosCarrito = [...articulosCarrito, infoProducto] */

    console.log(articulosCarrito)

    carritoHTML();


}



// muestra el carrito de compras en HTML

function carritoHTML() {

    // limpiar el HTML
    limpiarHTML();


    // recorre el carrito y limpiar el HTML

    articulosCarrito.forEach((producto) => {

        const { imagen,titulo,precio,cantidad,id} = producto;
       const row = document.createElement('tr');
        row.innerHTML = `

                <td>
                    <img src="${imagen}">
                </td>
                    <td> ${titulo}</td>
                    <td> ${precio}</td>
                     <td> ${cantidad}</td>
                      <td> 
                            <a href="#" class="borrar-curso"  data-id="${id}"> X </a>
                      </td>
                      
                `;

        // agrega el HTML del carrito en el tbody

        contenedorCarrito.appendChild(row);

    })
}


// eliminar los cursos del TBODY

function limpiarHTML() {

    // forma lenta
    /* contenedorCarrito.innerHTML = ''; */
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}




