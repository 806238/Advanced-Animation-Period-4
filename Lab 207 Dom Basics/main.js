

// global variables for canvas and context
var game, canvas, ctx;
window.onload = init;//  After the window has been loaded, go to init

function init(){
  canvas = document.createElement('canvas');
  //canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(255,0,0,.95)';
  canvas.width = 1100;  // 800 - 4 for the border
  canvas.height = 700; // 700 - 4 for the border
  ctx = canvas.getContext('2d'); // This is the context
  game = new Game();
  animate();
}


function animate(){
  ctx.fillStyle = 'rgba(0,0,255,.01)'
  ctx.fillRect(0,0,canvas.width,canvas.height); 
  game.update()
  requestAnimationFrame(animate);
}

  
