var format = document.getElementById("format");
var tintas = document.getElementById("tintas");
var massas = document.getElementById("massas");

function verificarOpcao(event) {
    const id = event.target.id;

    switch(id) {
      case "opcaoSimples":
        format.style.display = "flex";
        tintas.style.display = "none";
        massas.style.display = "none";
        break;
      case "opcaoTintas":
        format.style.display = "none";
        tintas.style.display = "flex";
        massas.style.display = "none";
        break;
      case "opcaoMassas":
        format.style.display = "none";
        tintas.style.display = "none";
        massas.style.display = "flex";
    }
}
