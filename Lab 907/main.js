
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let balls = [];
//var attr = new Attractor(1,1,30);

function init(){
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadBalls(52);
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
