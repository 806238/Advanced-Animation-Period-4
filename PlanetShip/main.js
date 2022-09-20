
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let Ships = [];
let planet;
let flame

function init(){
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadShips(5);
    animate();      // kick off the animation
}

function loadShips(n){
    for(let i = 0; i<n; i++){
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        Ships.push(new Ship(x,y, 30));
    }
}

// every animation cycle
function animate() {
    context.clearRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i<Ships.length; i++){
        Ships[i].run();
    }
    requestAnimationFrame(animate); // next cycle
}
