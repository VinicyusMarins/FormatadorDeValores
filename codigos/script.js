var format = document.getElementById("format"); //Simples
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

function formatar(event){
  const op = event.target.id;

  switch(op) {
    case "simples":
      let valor = parseFloat(document.getElementById("simples").value);

      let aprazo = valor.toFixed(2).replace(".",",");
      avista = (valor * 0.85).toFixed(2).replace(".",",");
    
      resultado = `${aprazo} a prazo e ${avista} a vista`;

      let output = document.getElementById("resultado");
      output.innerText = resultado;
    break;
  }
}
