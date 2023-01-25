
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
    requestAnimationFrame(animate); // next cycle
}