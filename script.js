document.addEventListener('mousemove', (event) => {
    const gallery = document.querySelector('.gallery');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = event.clientX - centerX; // Distancia desde el centro
    const y = event.clientY - centerY; // Distancia desde el centro
    const angle = Math.atan2(y, x) * (180 / Math.PI); // Calcular el ángulo
    gallery.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Aplicar la rotación
});
