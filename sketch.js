
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var leftSide;
var rightSide;
var ball;


function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
        isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	ground= new Ground(width/2,500,width,20);
	leftSide= new Ground(900,450,20,120);
	rightSide= new Ground(1100,450,20,120);

	ball = Bodies.circle(300,200,20,ball_options);
	World.add(world,ball);

	


 rectMode(CENTER);
 ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine);

  if(keyDown("UP_ARROW")) {
	keyPressed();
}
  

  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
          Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-5});
	}
}