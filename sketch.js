function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();  
  movimentaAtor();
  voltaPosiĆ§aoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}




