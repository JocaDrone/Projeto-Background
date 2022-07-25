var backyground;
var  greenwall;
var  redwall;
var  waterwall;
var  yellowwall;
var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor = "purple";
  redwall = createSprite(273,185,30,150)
  redwall.shapeColor = "red"
  greenwall = createSprite(200,275,175,30)
  greenwall.shapeColor = "green"
  waterwall = createSprite(128,185,30,150)
  waterwall.shapeColor = "blue"
  yellowwall = createSprite(200,95,175,30)
  yellowwall.shapeColor = "yellow"
}
 
function draw() 
{
  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  
 

  background("white")

  console.log(backyground)

  if(backyground != "right"){

    box.collide(redwall)

  }

  if(backyground != "down"){

    box.collide(greenwall)

  }

  if(backyground != "up"){

    box.collide(yellowwall)

  }

  if(backyground != "left"){

    box.collide(waterwall)

  }

  if(keyIsDown(RIGHT_ARROW)){
    background("red");
    backyground = "right";
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    backyground = "left";
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    backyground = "up";
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    backyground = "down";
  }

  if(keyDown("s")){
    box.position.y = box.position.y + 3;
  }

  if(keyDown("w")){
    box.position.y = box.position.y - 3;
  }

  if(keyDown("a")){
    box.position.x = box.position.x - 3;
  }

  if(keyDown("d")){
    box.position.x = box.position.x + 3;
  }
  
  drawSprites(); 
}

