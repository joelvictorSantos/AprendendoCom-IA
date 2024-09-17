// app.js
// Certifique-se de que 'dados.js' está sendo carregado antes deste script no HTML

function informacao() {
  const containerInfo = document.querySelector('.container-info');
  
  // Verifica se o container existe antes de tentar manipulá-lo
  if (!containerInfo) {
    console.error('Elemento .container-info não encontrado.');
    return;
  }

  containerInfo.innerHTML = ''; // Limpa o conteúdo anterior

  // Itera sobre os dados e adiciona ao container
  textoInicio.forEach(para => {
    // Cria o container para o texto centralizado
    const textocentralizado = document.createElement('div');
    textocentralizado.classList.add('texto-centralizado');
    
    // Adiciona o conteúdo HTML dentro do container
    textocentralizado.innerHTML = `
      
      <div class="container">
        <p>${para.texto}</p>
        <p>${para.subtexto}</p>
      </div>
    `;

    // Adiciona o container na página
    containerInfo.appendChild(textocentralizado);
  });
}

// Chamar a função no carregamento da página
window.onload = informacao;
