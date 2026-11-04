// --- Botão "Continuar história..." ---
const conteudo = document.getElementById('conteudoHistoria');
const btn = document.getElementById('botaoExpandir');

btn.addEventListener('click', function () {
  const expandido = conteudo.classList.toggle('expandido');

  if (expandido) {
    conteudo.style.maxHeight = conteudo.scrollHeight + 'px';
    btn.textContent = 'Ver menos';
  } else {
    conteudo.style.maxHeight = '';
    btn.textContent = 'Continuar história...';
    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  btn.setAttribute('aria-expanded', expandido);
});

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