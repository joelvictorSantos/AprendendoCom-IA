document.getElementById('toggle-theme').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');
    
    // Alterna a classe 'dark-mode' no header
    document.querySelector('header').classList.toggle('dark-mode');
    
    // Troca o ícone entre Lua (modo escuro) e Sol (modo claro)
    const icon = this.querySelector('theme-icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.src = "img/sun.png";
        icon.alt = "ícone Sol";
    } else {
        icon.src = "img/moon.png";
        icon.alt = "Ícone Lua"
    }
});


