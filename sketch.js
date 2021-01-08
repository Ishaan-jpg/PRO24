
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(150,200,20)
	ground = new Ground(200,200,1200,50)

	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(paper.body.position.y)
  drawSprites();
 paper.display()
 ground.display()
}



