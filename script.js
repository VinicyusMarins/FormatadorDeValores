function mostrarDiv() {
    const div = document.getElementById("simples");
    div.style.display = "flex";
    
    // Força o repaint para a animação funcionar corretamente
    void div.offsetWidth;
  
    div.classList.add("funcao");
  }

  function esconderDiv() {
    const div = document.getElementById("simples");

    void div.offsetWidth;

    div.classList.add("funcao_escondido");
    div.classList.remove("funcao");
  }