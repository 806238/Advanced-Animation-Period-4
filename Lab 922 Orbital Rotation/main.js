
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let planets = []

canvas = document.getElementById("cnv");
context = canvas.getContext("2d");

function init(){
    loadPlanets(30);
    animate();      // kick off the animation
}

function loadPlanets(n){
    for(let i = 0; i<n; i++){
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        let n = Math.floor(Math.random()*5)
        planets.push(new Planet(x,y,20,n));
    }
}


// every animation cycle
function animate() {
    context.clearRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i<planets.length; i++){
        planets[i].run();
    }
    requestAnimationFrame(animate); // next cycle
}