// --- Animação ao rolar a página ---
const elementos = document.querySelectorAll('.revelar');

const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.2 });

elementos.forEach(function (elemento) {
  observador.observe(elemento);
});