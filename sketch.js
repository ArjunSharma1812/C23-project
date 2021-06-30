const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computer_Base, player_Base;
var player1, computer1;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computer_Base = new computerBase(1500, random(450, height-300), 180, 150);
   computer1 = new computer(1500, computer_Base.body.position.y - 153, 50, 180);

   player_Base = new playerBase(300, random(450, height-300), 180, 150);
   player1 = new player(285, player_Base.body.position.y - 153, 50, 180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base s
   computer_Base.display();
   player_Base.display();

   //display Player and computerplayer
   computer1.display();
   player1.display();

}
