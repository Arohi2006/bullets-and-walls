var bullets,wall;
var speed,wieght;



function setup() {
  createCanvas(800,400);
  bullets=createSprite(100, 200, 20, 20);
  wall=createSprite(790,200,random(50,100),height/2);
  bullets.velocityX=Math.round(random(55,90));
  wieght=Math.round(random(400,1500));

}

function draw() {
  background(0);

  bullets.shapeColor=(255,255,255);

  if(wall.x-bullets.x<bullets.width/2+wall.width/2){
    
    var deformation = bullets.velocityX*bullets.velocityX*bullets.velocityX/200;

    if(deformation>180){
      wall.shapeColor=color(255,0,0);
    }
    if(deformation>100 && deformation<180){
      wall.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      wall.shapeColor=color(0,225,0);
    }
bullets.velocityX=0;
  }
  drawSprites();
}