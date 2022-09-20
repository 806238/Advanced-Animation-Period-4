
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
    planet.run();
    ship.run();
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
    context.arc(planet.loc.x, planet.loc.y, 50, 0, 2 * Math.PI);
    context.strokeStyle = "black";
    context.fillStyle = "#7373DF";
    context.fill();
    context.stroke();
    context.closePath();
}

planet.update = function(){
    
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
    context.strokeStyle = "red"; 
    context.fillStyle = "gray";     
    context.fill();     
    context.stroke()
    context.closePath();
    context.restore();
}

ship.update = function(){

}

ship.checkEdges = function(){
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
