const elementos = document.querySelectorAll(
    '.objetivo, .beneficio, .contato-card, .box-3d, .box-video'
);

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('aparecer');
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {
    observador.observe(elemento);
});