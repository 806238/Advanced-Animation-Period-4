function Mover(x,y) {
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(3,3);
 
}//++++++++++++++++++++++++++++++++ end mover constructor

//++++++++++++++++++++++++++++++++ mover methods
Mover.prototype.run = function () {
  this.update();
  this.bounce();
  this.render();
}

Mover.prototype.update = function () {
  this.loc.add(this.vel);
}


Mover.prototype.bounce = function () {
  if(this.loc.x > canvas.width){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.x < 0){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y > canvas.height){
    this.vel.y = -this.vel.y;
  }
  if(this.loc.y < 0){
    this.vel.y = -this.vel.y;
  }
}


Mover.prototype.render = function () {
   //  render balls in world
  context.save();
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, 10, 0, 2 * Math.PI); //circle
  context.strokeStyle = "red";
  context.fillStyle = "red";
  context.fill();
  context.stroke();
  context.closePath();
  context.restore();
   //  render balls in mini map
    
}
