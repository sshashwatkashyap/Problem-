const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var waste, ground, Line1, Line2, Line3;

function preload(){}

function setup() {

 createCanvas(800, 700);

 engine = Engine.create();
 world = engine.world;

 //Create the Bodies Here.

 ground = new Ground(600,height,1200,20)

 fill("red");   
 Line1 = new baseLine(650, 680, 200, 20);

 fill("red");   
 Line2 = new baseLine(550, 640, 20, 100);

 fill("red");   
 Line3 = new baseLine(750, 640, 20, 100);

 fill("blue")
 waste = new Paperball(400, 350, 20, 20)

 Engine.run(engine);
  
}


function draw() {

 rectMode(CENTER);
  
 background(0);
  
 drawSprites();

 waste.display();

 ground.display();

 Line1.display();
 
 Line2.display();

 Line3.display();

}



