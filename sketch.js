var seaimg, shipimg1
var sea;
var ship 

function preload() {

  seaimg = loadImage("sea.png");
  shipimg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup() {
  createCanvas(400, 400);
  sea = createSprite(200, 200, 400, 400);
  sea.addImage(seaimg);
  sea.scale = 0.4;
  sea.velocityX = -2;

  ship = createSprite(200,200);
  ship.addAnimation("ship",shipimg1);
  ship.scale = 0.2;
}


function draw() {
  background("blue");

  if(sea.x < 0){
    sea.x = 100;
  }
  drawSprites();

 
}

