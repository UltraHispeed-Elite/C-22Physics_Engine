const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:true
  }


ground=Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);


var ball_options={
  restitution:2.0
}

var ball1_options={
  restitution:1.5
}

var ball2_options={
  restitution:2.5
}
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

ball1=Bodies.circle(100,100,20,ball1_options);
World.add(world,ball1);
ball2=Bodies.circle(300,100,20,ball2_options);
World.add(world,ball2);
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  fill("red");
  ellipse (ball.position.x,ball.position.y,20,20);
  fill("blue");
  ellipse (ball1.position.x,ball1.position.y,20,20);
  fill("yellow");
  ellipse (ball2.position.x,ball2.position.y,20,20);

  
}