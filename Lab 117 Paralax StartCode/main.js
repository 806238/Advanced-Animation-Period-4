

// global variables for canvas and context
var game, canvas, ctx;
window.onload = init;//  After the window has been loaded, go to init
let background = [];

function init(){
  canvas = document.createElement('canvas');
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .95)';
  canvas.width = 1096;  // 800 - 4 for the border
  canvas.height = 696; // 700 - 4 for the border
  ctx = canvas.getContext('2d'); // This is the context
  game = new Game();
  loadBackground(1);
  animate();
}

function loadBackground(n){
  for(let i = 0;i<n;i++){
  let x = Math.random()*canvas.width;
  let y = Math.random()*canvas.height; 
  background.push(new Background(x,y))
  }
}

function animate(){
  
  ctx.fillStyle = 'rgba(0,0,0,.05)'
  ctx.fillRect(0,0,canvas.width,canvas.height); 
  game.update()
  for(let i = 0;i<background.length;i++){
    background[i].run();
  }
  requestAnimationFrame(animate);
}

  
