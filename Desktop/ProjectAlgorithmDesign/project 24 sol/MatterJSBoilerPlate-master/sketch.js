var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var box1;
var paper1;
//var dustbinIMG
function preload(){

	//dustbinIMG=loadImage("dustbingreen.png")
	

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	

	Engine.run(engine);
   paper1=new paper1(50,height-90,20);
	//box1 = new Box(1190,height-90,20,100);
	//box2 = new Box(1000,height-90,20,100);
	box3 = new Box(1100,height-120,100,100);

	//box4= createSprite(1100,height-120,200,20);
	//box4.addImage(dustbinIMG);
	//box4.scale=0.5;
	

  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  drawSprites();
  paper1.display();
  //box1.display();
  //box2.display();
  box3.display();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position, {x:100,y:-85});
	}
}
