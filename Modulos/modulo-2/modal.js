// Adiciona ou remove a classe no-scroll ao corpo quando o modal abre/fecha
document.querySelectorAll('.menu-navegacao a[data-modal]').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      const overlay = document.querySelector('.overlay');

      // Adiciona as classes para mostrar o modal e a overlay
      modal.classList.add('modal-show');
      overlay.classList.add('overlay-show');

      // Adiciona a classe no-scroll para impedir a rolagem do corpo
      document.body.classList.add('no-scroll');
  });
});

// Fecha o modal ao clicar no botão de fechar ou na overlay
document.querySelectorAll('.modal-close, .overlay').forEach(element => {
  element.addEventListener('click', function() {
      document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('modal-show'));
      document.querySelector('.overlay').classList.remove('overlay-show');

      // Remove a classe no-scroll para permitir a rolagem do corpo
      document.body.classList.remove('no-scroll');
      
  });
});
