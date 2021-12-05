const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3,box4,box5;
var Ground1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Ground1= new Ground(600,height,1200,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(870,120,70,70);
}

function draw(){
    background(0);
    Engine.update(engine);
    Ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
}