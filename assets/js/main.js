// Seleciona os elementos do HTML pelos IDs
const conteudo = document.getElementById('conteudoHistoria');
const btn = document.getElementById('botaoExpandir');

// Adiciona o evento de clique no botão
btn.addEventListener('click', function() {
  // Alterna a classe '.expandido' na div do texto
  conteudo.classList.toggle('expandido');
  
  // Muda o texto do botão dependendo do estado
  if (conteudo.classList.contains('expandido')) {
    btn.textContent = 'Ver menos';
  } else {
    btn.textContent = 'continuar história...';
    
    // Opcional: Rola a tela suavemente de volta para o topo da história ao fechar
    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});
