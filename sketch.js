const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var log1;
var pig1;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,350,70,70);
    box2 = new Box(1000,350,70,70);
    box3 = new Box(800,250,70,70);
    box4 = new Box(1000,250,70,70);
    box5 = new Box(900,150,70,70);
    ground = new Ground(600,390,1200,20);
    log1 = new log(900,330,300,PI/2);
    log2 = new log(900,230,300,PI/2);
    log3 = new log(830,150,130,PI/7);
    log4 = new log(960,150,130,-PI/7);
    pig1 = new Pig(900,350);
    pig2 = new Pig(900,250)
    bird1 = new Bird(200,300);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    bird1.display();
}