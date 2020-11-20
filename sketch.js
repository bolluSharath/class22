const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  object=Bodies.circle(200,100,40);
  World.add(world,object);
  console.log(object.position.x)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  circle(object.position.x,object.position.y,40);
  rect(ground.position.x,ground.position.y,400,20);

  drawSprites();
}