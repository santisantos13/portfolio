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