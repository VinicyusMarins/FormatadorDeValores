var format = document.getElementById("format"); //Simples
var tintas = document.getElementById("tintas");
var massas = document.getElementById("massas");
var output = document.getElementById("resultado");

var resultado = 0;

var menu = document.querySelector('#menu')
var navBar = document.querySelector('#nav-bar')
function clickMenu(){
  if (navBar.style.display == 'flex'){
    navBar.style.display = 'none'
  } else {
    navBar.style.display = 'flex'
  }
}

function mudouTamanho(){
  if(window.innerWidth > 600){
    navBar.style.display = 'flex'
  } else {
    navBar.style.display = 'none'
  }
}

function verificarOpcao(event) {
    const id = event.target.id;

    switch(id) {
      case "opcaoSimples":
        format.style.display = "flex";
        tintas.style.display = "none";
        massas.style.display = "none";

        if (window.innerWidth <= 600){
          navBar.style.display = 'none'
        }
        break;
      case "opcaoTintas":
        format.style.display = "none";
        tintas.style.display = "flex";
        massas.style.display = "none";

        if (window.innerWidth <= 600){
          navBar.style.display = 'none'
        }
        break;
      case "opcaoMassas":
        format.style.display = "none";
        tintas.style.display = "none";
        massas.style.display = "flex";

        if (window.innerWidth <= 600){
          navBar.style.display = 'none'
        }
        break;
    }
}

function formatarSimples(){
  let valor = parseFloat(document.getElementById("simples").value);
  
  if(isNaN(valor)){
    alert('[ERRO] Insira um valor valido!');
  }else{
    let aprazo = valor.toFixed(2).replace(".",",");
    avista = (valor * 0.85).toFixed(2).replace(".",",");
      
    resultado = `${aprazo} a prazo e ${avista} a vista`;

    output.innerText = resultado;
  }
}

function formatarTintas(){
  let tintaP = parseFloat(document.getElementById("tintaP").value);
  let tintaG = parseFloat(document.getElementById("tintaG").value);

  if(isNaN(tintaP) && isNaN(tintaG)){
    alert('[ERRO] Insira um valor valido!');
  }else if(isNaN(tintaG)){
    let tintaPPrazo = tintaP.toFixed(2).replace(".",",");
    let tintaPVista = (tintaP * 0.85).toFixed(2).replace(".",",");
    
    resultado = `3,6L - ${tintaPPrazo} a prazo e ${tintaPVista} à vista`;
    output.innerText = resultado;
  }else if(isNaN(tintaP)){
    let tintaGPrazo = tintaG.toFixed(2).replace(".",",");
    let tintaGVista = (tintaG * 0.85).toFixed(2).replace(".",",");
    
    resultado = `18L - ${tintaGPrazo} a prazo e ${tintaGVista} à vista`;

    output.innerText = resultado;
  }else{
    let tintaPPrazo = tintaP.toFixed(2).replace(".",",");
    let tintaPVista = (tintaP * 0.85).toFixed(2).replace(".",",");

    let tintaGPrazo = tintaG.toFixed(2).replace(".",",");
    let tintaGVista = (tintaG * 0.85).toFixed(2).replace(".",",");

    resultado = `3,6L - ${tintaPPrazo} a prazo e ${tintaPVista} à vista\n18L - ${tintaGPrazo} a prazo e ${tintaGVista} à vista`;

    output.innerText = resultado;
  }
}

function formatarMassas(){
  let massaP = parseFloat(document.getElementById("massaP").value);
  let massaG = parseFloat(document.getElementById("massaG").value);

  if(isNaN(massaP) && isNaN(massaG)){
    alert('[ERRO] Insira um valor valido!');

  }else if(isNaN(massaG)){
    let massaPPrazo = massaP.toFixed(2).replace(".",",");
    let massaPVista = (massaP * 0.85).toFixed(2).replace(".",",");
    
    resultado = `3,6L - ${massaPPrazo} a prazo e ${massaPVista} à vista`;
    output.innerText = resultado;

  }else if(isNaN(massaP)){
    let massaGPrazo = massaG.toFixed(2).replace(".",",");
    let massaGVista = (massaG * 0.85).toFixed(2).replace(".",",");
    
    resultado = `18L - ${massaGPrazo} a prazo e ${massaGVista} à vista`;

    output.innerText = resultado;
    
  }else{
    let massaPPrazo = massaP.toFixed(2).replace(".",",");
    let massaPVista = (massaP * 0.85).toFixed(2).replace(".",",");

    let massaGPrazo = massaG.toFixed(2).replace(".",",");
    let massaGVista = (massaG * 0.85).toFixed(2).replace(".",",");

    resultado = `3,6L - ${massaPPrazo} a prazo e ${massaPVista} à vista\n18L - ${massaGPrazo} a prazo e ${massaGVista} à vista`;

    output.innerText = resultado;
  }
}

function copiarSimples(){
  const botao = document.getElementById("botaoSimples");

  navigator.clipboard.writeText(output.innerText).then(() =>{
    botao.innerText = "Copiado!";
    setTimeout(() => {
      botao.innerText = "Formatar"
    }, 1500);
  })
}

function copiarTintas(){
  const botao = document.getElementById("botaoTintas");

  navigator.clipboard.writeText(output.innerText).then(() =>{
    botao.innerText = "Copiado!";
    setTimeout(() => {
      botao.innerText = "Formatar"
    }, 1500);
  })
}

function copiarMassas(){
  const botao = document.getElementById("botaoMassas");

  navigator.clipboard.writeText(output.innerText).then(() =>{
    botao.innerText = "Copiado!";
    setTimeout(() => {
      botao.innerText = "Formatar"
    }, 1500);
  })
}

function executarSimples(){
  formatarSimples();
  copiarSimples();
}

function executarTintas(){
  formatarTintas();
  copiarTintas();
}

function executarMassas(){
  formatarMassas();
  copiarMassas();
}

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      formatarEnter(event, input); // Passa o evento e o input como argumento
    }
  });
});

function formatarEnter(event, input) {
  switch(input.id) { // Usa o ID do input para diferenciar os comandos
    case "simples":
      executarSimples();
      document.querySelector('input#simples').value = ''
      break;
    case "tintaP":
      executarTintas();
      document.querySelector('input#tintaP').value = ''
      break;
    case "tintaG":
      executarTintas();
      document.querySelector('input#tintaP').value = ''
      document.querySelector('input#tintaG').value = ''
      break;

    case "massaP":
      executarMassas();
      document.querySelector('input#massaP').value = ''
      break;
    case "massaG":
      executarMassas();
      document.querySelector('input#massaP').value = ''
      document.querySelector('input#massaG').value = ''
      break;
  }
}
