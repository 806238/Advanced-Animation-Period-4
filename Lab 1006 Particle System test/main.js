//Lab 1011: 
//Sept. 30, 2022

//Global
let world;
window.onload = init;

function init(){
    world = new World();
    
    animate();
}

function animate(){
  world.run();
  
  requestAnimationFrame(animate);
}
