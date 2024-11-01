 // Obtener el modal
 var modal = document.getElementById("modalCarrito");

 // Obtener el botón del carrito
 var carritos = document.querySelector(".icono");

 // Obtener el botón de cierre
 var span = document.getElementsByClassName("close")[0];

 // Cuando el usuario haga clic en el ícono del carrito, abre el modal
 carritos.onclick = function (event) {
    // Obtener la posición del ícono del carrito
    var rect = carrito.getBoundingClientRect();

    // Posicionar el modal justo debajo del botón del carrito
    modal.style.top = (rect.bottom + window.scrollY + 20) + "px";  // 10px de margen
    modal.style.left = (rect.left + window.scrollX - 500) + "px";
    modal.style.display = "block";  // Mostrar el modal
 }

 // Cuando el usuario haga clic en <span> (x), cierra el modal
 span.onclick = function () {
    modal.style.display = "none";
 }

 // Cuando el usuario haga clic fuera del modal, cierra el modal
 window.onclick = function (event) {
    if (event.target == modal) {
       modal.style.display = "none";
    }
 }