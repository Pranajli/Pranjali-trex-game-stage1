
var trex ,trex_running;
var ground,groundimage;
function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
groundimage = loadAnimation("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  edges = createEdgeSprites();
  //create a trex sprite

  trex = createSprite(50,180,50,50);
  trex.addAnimation("running",trex_running);
  trex.scale =0.5;
 trex.y=160;
  ground = createSprite(200,180,400,25);
  ground.addAnimation("movingground",groundimage);
}

function draw(){
  background("lightgrey")

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 1; // gravity

  trex.collide(ground);

  
  drawSprites();

}
