
var x = 160;
var y = 160;
var rx  = 100;
var ry = 100;
var vidas = 3;
var pontos = 0;
var nivel =1;
var tamBloco = 40;
var imgbloco;
var tamcomida = 20;
var imgcomida;
function preload(){
	imgbloco = loadImage("quadrado.png");
	imgcomida = loadImage("comida.png");
	}
	
cenario = [ 
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], 
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','#','v','#','v','v','v','v','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','#','#','#','#','#','v','#','v','v','v','v','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','#','#','#','#','#','#','#','v','v','v','v','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']

]; 
function setup() {
  createCanvas(920, 560);
}

function draw() {
  background(0);
  fill(0,255,255);
  
  rect(rx, ry, 80, 80);
  
  rx++
  ry--

  
 if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;
    


  fill(255, 0, 0);
  ellipse(x, y, 35, 35);
  
  textSize(25);
  fill(255,240,0)
  text("Vidas:" +vidas,30,30);
  fill(255,240,0);
  text("Pontos:" +pontos,230,30);
  text("Nível: "+nivel,500,30)
  
   for ( i = 0; i < cenario.length; i++ ) { 
    for ( j = 0; j < cenario[0].length; j++ ) {  
      if ( cenario[i][j] == '#' ) {
         image(imgbloco,j*tamBloco,i*tamBloco); 
        fill(200,100,255);
        rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
             }
      
    }
  }
}
