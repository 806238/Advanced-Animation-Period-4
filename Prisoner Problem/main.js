
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
let prisoners = [];


function init(){
    animate();      // kick off the animation
    loadArray(5);
    loopLength(2)
    
}

// every animation cycle
function animate() {
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate); // next cycle
}

function loadArray(n){
    for(let i=0;i<n;i++){
        prisoners[i] = i;
    }
    prisoners.sort(()=>Math.random()-.5)
    console.log(prisoners)  
}

function loopLength(pn){
    
}