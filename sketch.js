var log;
var ball1;
var ball2;
var ball3;
var ball4;
var ground;
var slingShot1st;
var slingShot2nd;
var slingShot3rd;
var slingShot4th;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800,650);


	engine = Engine.create();
	world = engine.world;

	log = new Log(405,350,230,20);
	
  ball1 = new Ball (350,470,25)

	ball2 = new Ball(400,470,25)

	ball3 = new Ball(450,470,25)

	ball4 = new Ball(500,470,25)

	ground = new Ground(width/2, 630, width,20)

  strokeWeight(4);
	slingShot1st = new Slingshot1(ball1.body,{x:320,y:350})

  slingShot2nd = new Slingshot1(ball2.body,{x:370,y:350})

  slingShot3rd = new Slingshot1(ball3.body,{x:420,y:350})

  slingShot4th = new Slingshot1(ball4.body,{x:470,y:350})
  
  
  var render = Render.create({ 
    element:document.body, 
    engine:engine, 
    options:{ width:800, height:650, 
    wireframes:false 
    } 
  });
  Render.run(render);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  slingShot1st.display();
  slingShot2nd.display();
  slingShot3rd.display();
  slingShot4th.display();
  log.display();
  ground.display();
  drawSprites();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x : -45,y : -45})
	}
}
