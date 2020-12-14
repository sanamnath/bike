const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImage;

var bike;
var ground1, ground2;

function preload(){
    backgroundImage = loadImage("images/bachground/Desert.jpg");
}
function setup(){
    createCanvas(1200,600,WEBGL);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400,500,800,10,0);

    ground2 = new Ground(1200,375,500,10,PI/12);

    bike = new Bike(200,200);

}
function draw(){ 
    background(backgroundImage);
    Engine.update(engine);

   camera.position.x = bike.body.position.x;
    camera.position.y =300;

    //console.log(bike.body.position.x);

    ground1.display();
    ground2.display();
    
    bike.display();
}
function keyPressed(){
    if (keyCode === 39){
        Body.setVelocity(bike.body, {x:15,y:0});
    }
}