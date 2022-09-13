function setup() {
  createCanvas(600, 400);
}

//Variaveis da Bolinha

let velX = 6;
let velY = 6;
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//Variaveis Raquete Jogador

let xRaquete = 5;
let yRaquete = 150;
let compRaquete = 6;
let altRaquete = 90;
let colidir = false

//Variaveis Raquete Oponente

let xRaqueteOp = 585;
let yRaqueteOp = 150;
let velYRaqueteOp;

//Variaveis Placar

let pontosJogador = 0;
let pontosOp = 0

// PLACAR DO JOGO //

function mostrarPlacar(){
  fill(255);
  text(pontosJogador, 278, 26);
  text(pontosOp, 321, 26);
  
}

function incluirPlacar(){
  if (xBolinha > 590){
    pontosJogador += 1;
  }
  if (xBolinha < 10){
    pontosOp += 1;
  }
}

// Funcoes Bolinha

function mostrarBolinha(){
  circle (xBolinha, yBolinha, diametro)    
}

function movimentarBolinha(){
  xBolinha += velX
  yBolinha += velY
}

function bordasBolinha(){
  if (xBolinha + raio > width || 
       xBolinha - raio < 0){
        velX *= -1;
    }
  
    if (yBolinha + raio > height || 
       yBolinha - raio < 0){
        velY *= -1
    }
}

//Funcoes Raquete

function mostrarRaquete(x, y){
  rect(x, y, compRaquete, altRaquete)
}

function movimentarRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 8;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 8
  }
}

function colisaoRaqueteProprio(){
  if (xBolinha - raio < xRaquete + compRaquete && yBolinha - raio < yRaquete + altRaquete && yBolinha + raio > yRaquete){
    velX *= -1
  }
}

function colisaoRaquete(x, y){
  colidir = collideRectCircle(x, y, compRaquete, altRaquete, xBolinha, yBolinha, raio)
  if (colidir){
    velX *= -1
  }
}

function movimentoRaqueteOp(){
   velYRaqueteOp = yBolinha - yRaqueteOp - compRaquete / 2 - 30
  yRaqueteOp += velYRaqueteOp
}


//Funcao Principal
function draw() {
  background(0);
  mostrarPlacar();
  incluirPlacar();
  mostrarBolinha();
  movimentarBolinha();
  bordasBolinha();
  mostrarRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOp, yRaqueteOp);
  movimentarRaquete();
  movimentoRaqueteOp()
  colisaoRaquete(xRaquete, yRaquete)
  colisaoRaquete(xRaqueteOp, yRaqueteOp)
  
  }

