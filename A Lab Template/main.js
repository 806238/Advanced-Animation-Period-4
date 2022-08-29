// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context, x, y, dx, dy;
var g = {
    a:12,
    b:3
};

function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");
    x = y = 100;    // initial x,y canvas location
    dx = dy = 2;    // velocity in x and y directions
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
    update();   // update location
    draw();     // render
    requestAnimationFrame(animate); // next cycle
}

// move the circle to a new location
function update() {
    x += dx;    // update x coordinate of location with x velocity
    y += dy;    // update y coordinate of location with y velocity
}

// render a circle
function draw() {
    let radius = 15; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "blue";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}
