const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball;
var btn1;
var ground2;
var angle = 60
var fan, fan2;
function setup() {
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var ball_option = {
        restitution: 0.95,
        frictionAir: 0.01
    }

    var ground_options = {
        isStatic: true
      };

      btn1 = createImg("up.png");
      btn1.position(20,30);
      btn1.size(50,50);
      btn1.mouseClicked(vForce);

      ground = Bodies.rectangle(100,400,400,20,ground_options);
      World.add(world,ground);

      ground2 = Bodies.rectangle(100,300,100,20,ground_options);
      World.add(world,ground2);

   ball = Bodies.circle(100,10,20,ball_option);
   World.add(world, ball);

   fan = new Ground(50,370,50,30);
   fan2 = new Ground(150,370,50,30);



   rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  
  ellipse(ball.position.x, ball.position.y,20);

  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

Matter.Body.rotate(ground2,angle);
push();
translate(ground2.position.x, ground2.position.y);
rotate(angle);
rect(0, 0, 100, 20);
pop();
angle = angle + 0.1;

fan.show();
fan2.show();


}

function vForce(){
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0, y:-0.05});
}