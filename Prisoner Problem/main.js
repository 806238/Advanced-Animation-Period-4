
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
let prisoners = [];

function init(){
    animate();      // kick off the animation
    loadArray(3);
    
}

// every animation cycle
function animate() {
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate); // next cycle
}

function loadArray(n){
    for(let i=0;i<n;i++){
        for(let j = 0;j<n;j++){
            let temp = Math.floor(Math.random()*n)
            prisoners[i] = temp;
            if(prisoners[i] == prisoners[j]){
                console.log(true)
            }
        }
    }
    console.log(prisoners)
}