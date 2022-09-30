
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

function init(){
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    context.clearRect(0,0,canvas.width,canvas.height);
    ship.run();
    planet.run();
    requestAnimationFrame(animate); // next cycle
}

// +++++++++++++++++++++++++++++++++++++++ planet

planet = {}

planet.loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.height);
planet.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
planet.acc = new JSVector(0, 0);

planet.run = function(){
    planet.render();
    planet.update();
    planet.checkEdges();
}

planet.render = function(){
    context.beginPath();
    context.arc(planet.loc.x, planet.loc.y, 30, 0, 2 * Math.PI);
    context.strokeStyle = "black";
    context.fillStyle = "green";
    context.fill();
    context.stroke();
    context.closePath();
}

planet.update = function(){
    if(ship.loc.distance(planet.loc)<200){ 
        planet.acc = JSVector.subGetNew(planet.loc, ship.loc) 
            planet.acc.normalize();
            planet.acc.multiply(.5);
            planet.vel.limit(2);
            planet.vel.add(planet.acc);
            planet.loc.add(planet.vel); 
    }
    if(ship.loc.distance(planet.loc)<60){
        planet.loc.x = Math.random()*canvas.width;
        planet.loc.y = Math.random()*canvas.height;
    }
}

planet.checkEdges = function(){
    if(planet.loc.x >= canvas.width){
        planet.vel.x = -planet.vel.x;
    }
    if(planet.loc.x <= 0){
        planet.vel.x = -planet.vel.x;
    }
    if(planet.loc.y >= canvas.height){
        planet.vel.y = -planet.vel.y;
    }
    if(planet.loc.y <= 0){
        planet.vel.y = -planet.vel.y;
    }
}


// +++++++++++++++++++++++++++++++++++++++ ship
ship = {}

ship.loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.height);
ship.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
ship.acc = new JSVector(0, 0);
ship.diam = 30;

ship.run = function(){
    ship.render();
    ship.update();
    ship.checkEdges();
}

ship.render = function(){
    context.beginPath();   
    context.save();
    context.translate(ship.loc.x,ship.loc.y);
    context.rotate(ship.vel.getDirection());
    context.moveTo(ship.diam, 0);
    context.lineTo(0, ship.diam/2);
    context.lineTo(ship.diam-20, 0);
    context.lineTo(0, -ship.diam/2);
    context.strokeStyle = "gray"; 
    context.fillStyle = "gray";     
    context.fill();     
    context.stroke()
    context.closePath();
    context.restore();
}

ship.update = function(){
    ship.loc.add(ship.vel);
    ship.acc = JSVector.subGetNew(planet.loc, ship.loc)        
        ship.acc.normalize();
        ship.acc.multiply(.5);
        ship.vel.limit(3);
        ship.vel.add(ship.acc);
}

ship.checkEdges = function(){
    if(ship.loc.x >= canvas.width){
        ship.vel.x = -ship.vel.x;
    }
    if(ship.loc.x <= 0){
        ship.vel.x = -ship.vel.x;
    }
    if(ship.loc.y >= canvas.height){
        ship.vel.y = -ship.vel.y;
    }
    if(ship.loc.y <= 0){
        ship.vel.y = -ship.vel.y;
    }
}
