var resultado = 0;

function formatar(){ //Codigo com Erro, ainda aprendendo input
    let format = parseFloat(document.getElementById("valor").value);
    if(isNaN(format)){
        alert("Digite um valor valido!");
        return;
    }
    let aprazo = format.toFixed(2).replace(".",",");
    let avista = (format * 0.85).toFixed(2).replace(".",",");
    
    resultado = `${aprazo} a prazo e ${avista} a vista`;

    let output = document.getElementById("resultado");
    output.innerText = resultado;
}

function copiar(){
    navigator.clipboard.writeText(resultado).then(() => {
        const botao = document.getElementById("botaoCopiar");
    
        botao.innerText = "✔ Copiado!";
        setTimeout(() => {
          botao.innerText = "Copiar";
        }, 1500);
      });
}

document.getElementById("valor").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    formatarCopiar();
  }
});

function formatarCopiar(){
  formatar();
  copiar();
}
