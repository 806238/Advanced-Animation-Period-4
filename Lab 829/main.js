
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let balls = [];

function init(){
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadBalls(3);
    animate();      // kick off the animation
}

function loadBalls(n){
    for(let i = 0; i<n; i++){
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        balls.push(new Ball(x,y, 30));
    }
}

// every animation cycle
function animate() {
    context.clearRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i<balls.length; i++){
        balls[i].run();
    }
    requestAnimationFrame(animate); // next cycle
}

// move the circle to a new location
function update() {
    x += dx;    // update x coordinate of location with x velocity
    y += dy;    // update y coordinate of location with y velocity
}

// render a circle
/*function draw() {
    let radius = 15; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "blue";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}*/
