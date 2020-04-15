
//var r = 0;
//var g = 50;
//var b=255;
var canvas1;
var canvas2;
var canvas3;
var ball;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(900,400);
  canvas1 = createSprite(150,200,300,400);
  canvas2 = createSprite(450,200,300,400);
  canvas3 = createSprite(750,200,300,400);
  canvas1.shapeColor = "black"
  canvas2.shapeColor = "black";
  canvas3.shapeColor = "black";
  ball = createSprite(200,140,30,30);
}


function draw(){

  ball.x = World.mouseX
  ball.y = World.mouseY
if (ball.isTouching(canvas1)){
  canvas1.shapeColor = "blue"
  canvas2.shapeColor = "black"
  canvas3.shapeColor = "black"
}
if (ball.isTouching(canvas2)){
  canvas2.shapeColor = "purple"
  canvas1.shapeColor = "black"
  canvas3.shapeColor = "black"
}
if (ball.isTouching(canvas3)){
  canvas3.shapeColor = "red"
  canvas1.shapeColor = "black"
  canvas2.shapeColor = "black"
}
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawSprites();
}