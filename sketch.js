const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,0,50,100);
    box2 = new Box(240,0,50,100);
    box3=new Box(160,0,50,100);
    box4= new Box(195,-100,230,50);
    box5=new Box(155,-200,50,50);
    box6=new Box(257,-200,50,50);
    box7=new Box(210,-300,230,50);
    box8=new Box(200,-500,50,50);
    box9=new Box(250,-500,50,50);
    box10=new Box(160,-500,50,50);
    box11=new Box(200,-800,230,50);
    box12=new Box(60,0,50,350);
    box13=new Box(350,0,50,350);
    ground = new Ground(200,height,400,20)
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
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    ground.display();
}