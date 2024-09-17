const button = document.querySelector('.nav-button');
const section = document.querySelector('.seu-conteudo'); // Substitua pelo ID correto da seção principal

window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= section.offsetHeight) {
    button.style.position = 'fixed';
    button.style.bottom = '100px'; // Ajuste a distância da borda inferior para evitar sobreposição com o footer
  } else {
    button.style.position = 'absolute';
    button.style.bottom = '20px'; // Posição quando não estiver no fim da página
  }
});
