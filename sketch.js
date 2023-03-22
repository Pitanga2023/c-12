var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadImage("path.png");
  boyImg=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png");
}

function setup(){
  
  createCanvas(400,400);
path=createSprite(200,200);
path.addImage(pathImg);


 
  
path.scale=1.2;

boy=createSprite(200,330);
boy.addAnimation("boy",boyImg);
boy.scale=0.9;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x = World.mouseX;
  // mover o menino com o mouse usando mouseX
  if (path.y < 0){
    path.y = path.width/2;
  }
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  //código para redefinir o fundo
 
  
  drawSprites();
}
