var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle;
var count = -1;
var state = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  push();
  stroke(255, 255, 0);
  line(0, 490, 800, 490);
  pop();
  if (state === 1) {
    //console.log(particles[count]);
    if (particles[count].body.position.y > 490) {
      if (particles[count].body.position.x <= 240) {
        score += 500;
        state = 0;
        particle = null;
        console.log(1)
      }
      if (particles[count].body.position.x > 240 && particles[count].body.position.x <= 560) {
        score += 100;
        console.log(2);
        state = 0;
        particle = null;
      }
      if (particles[count].body.position.x > 560) {
        score += 200;
        console.log(3);
        state = 0;
        particle = null;
      }
    }
  }
  
}

function mousePressed() {
  if (state === 0) {
    particles.push(new Particle(mouseX, 10, 10));
    count++;
    particle = particles[count];
    state = 1;
  }
}