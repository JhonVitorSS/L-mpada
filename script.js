let statusLamp = document.getElementById("condicaoLampada");
let lampada = document.getElementById("lampada");
let botao = document.getElementById("btn");
let desligada = false;

function funcionalidade() {
  if (!desligada) {
    lampada.src = "/imagens/ligada.jpg";
    statusLamp.textContent = "😁Ligada Está😁";
    botao.textContent = "Desligar";
    desligada = true;
  } else {
    lampada.src = "/imagens/desligada.jpg";
    statusLamp.textContent = "😱Desligada está😱";
    botao.textContent = "Ligar";
    desligada = false;
  }
}


function entrou() {
    lampada.src = "/imagens/ligada.jpg";
    statusLamp.textContent = "😁Ligada Está😁";
    desligada = true;
}

function saiu() {
  lampada.src = "/imagens/desligada.jpg";
  statusLamp.textContent = "😱Desligada está😱";
  desligada = false;
}


function quebrou() {
  lampada.src = "/imagens/quebrada.jpg";
    statusLamp.textContent = "😓Ih, rapaz.😓";

  botao.removeEventListener("click", funcionalidade);
  lampada.removeEventListener("mouseenter", entrou);
  lampada.removeEventListener("mouseout", saiu);
}

botao.addEventListener("click", funcionalidade);
lampada.addEventListener("mouseenter", entrou);
lampada.addEventListener("mouseout", saiu);


lampada.addEventListener("dblclick", quebrou);
