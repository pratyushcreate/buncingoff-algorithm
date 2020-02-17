var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(300, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameobject1=createSprite(400,300,60,60);
  gameobject1shapeColor="red";
  gameobject1.velocityY=+5;
}

function draw() {
  background(0,0,0);  
 bounceoff(movingRect,gameobject1);
 
  drawSprites();
}
