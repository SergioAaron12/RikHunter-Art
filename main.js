// main.js - Lógica para RikHunter Art

document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: Mensaje al comprar
    document.querySelectorAll('.btn-comprar').forEach(function(btn) {
        btn.addEventListener('click', function() {
            alert('¡Cuadro añadido al carrito!');
        });
    });

    // Modal para ver imagen completa de clientes
    const imagenes = document.querySelectorAll('.img-cliente');
    const modal = document.getElementById('modal-img');
    const modalImg = document.getElementById('img-modal-grande');
    const cerrar = document.getElementById('cerrar-modal');

    imagenes.forEach(function(img) {
        img.addEventListener('click', function() {
            modal.classList.add('mostrar');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });
    cerrar.addEventListener('click', function() {
        modal.classList.remove('mostrar');
        modalImg.src = '';
    });
    // Cerrar modal al hacer click fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('mostrar');
            modalImg.src = '';
        }
    });
});
