var resultado = 0;

function formatar(){ 
    let op = document.getElementById("select").value
  
    switch (op){
      case "simples":
        let valor = parseFloat(document.getElementById("inputSimples").value)

        if(isNaN(valor)){
          alert("Digite um valor valido!");
          return;
        }
        let aprazo = valor.toFixed(2).replace(".",",");
        avista = (valor * 0.85).toFixed(2).replace(".",",");
      
        resultado = `${aprazo} a prazo e ${avista} a vista`;
  
        let output = document.getElementById("resultado");
        output.innerText = resultado;
        break;

      case "tintas":
        let tintaP = parseFloat(document.getElementById("tintaP").value)
        let tintaG = parseFloat(document.getElementById("tintaG").value)

        if(isNaN(tintaP) || isNaN(tintaG)){
          alert("Digite um valor valido!");
          return
        }

        let tintaPPrazo = tintaP.toFixed(2).replace(".",",")
        let tintaGPrazo = tintaG.toFixed(2).replace(".",",")

        let tintaPVista = (tintaP * 0.85).toFixed(2).replace(".",",")
        let tintaGVista = (tintaG * 0.85).toFixed(2).replace(".",",")

        resultado = `3,6L - ${tintaPPrazo} a prazo e ${tintaPVista} à vista\n18L - ${tintaGPrazo} a prazo e ${tintaGVista} à vista`;

        let tintas = document.getElementById("resultado");
        tintas.innerText = resultado;
      break;

      case "massas":
        let massaP = parseFloat(document.getElementById("massaP").value)
        let massaG = parseFloat(document.getElementById("massaG").value)

        if(isNaN(massaP) || isNaN(massaG)){
          alert("Digite um valor valido!");
          return
        }

        let massaPPrazo = massaP.toFixed(2).replace(".",",")
        let massaGPrazo = massaG.toFixed(2).replace(".",",")

        let massaPVista = (massaP * 0.85).toFixed(2).replace(".",",")
        let massaGVista = (massaG * 0.85).toFixed(2).replace(".",",")

        resultado = `5,8kg - ${massaPPrazo} a prazo e ${massaPVista} à vista\n25kg - ${massaGPrazo} a prazo e ${massaGVista} à vista`;

        let massas = document.getElementById("resultado");
        massas.innerText = resultado;
      break;
    }
}

function copiar(){
  let op = document.getElementById("select").value
    if(op === "simples"){
      navigator.clipboard.writeText(resultado).then(() => {
        const botao = document.getElementById("btnSimples");
      
        botao.innerText = "✔ Copiado!";
        setTimeout(() => {
          botao.innerText = "Formatar";
        }, 1500);
        });
    }

    if(op === "tintas"){
      navigator.clipboard.writeText(resultado).then(() => {
        const botao = document.getElementById("btnTintas");
      
        botao.innerText = "✔ Copiado!";
        setTimeout(() => {
          botao.innerText = "Formatar";
        }, 1500);
        });
    }

    if(op === "massas"){
      navigator.clipboard.writeText(resultado).then(() => {
        const botao = document.getElementById("btnMassas");
      
        botao.innerText = "✔ Copiado!";
        setTimeout(() => {
          botao.innerText = "Formatar";
        }, 1500);
        });
    }
}

function executarTudo(){
  formatar();
  copiar();
}

function atualizar(){
  const op = document.getElementById("select").value;

  const simples = document.getElementById("simples");
  const tintas = document.getElementById("tintas");
  const massas = document.getElementById("massas");

  // Oculta todas as divs primeiro
  simples.style.display = "none";
  tintas.style.display = "none";
  massas.style.display = "none";

  // Mostra apenas a selecionada
  if (op === "simples") simples.style.display = "flex";
  if (op === "tintas") tintas.style.display = "flex";
  if (op === "massas") massas.style.display = "flex";
}

document.getElementById("inputSimples").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    executarTudo();
  }
});

document.getElementById("massaG").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    executarTudo();
  }
});

document.getElementById("tintaG").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    executarTudo();
  }
});