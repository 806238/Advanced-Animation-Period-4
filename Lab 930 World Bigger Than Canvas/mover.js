function Mover(x,y,ctx1,ctx2,clr) {
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(Math.random() * 6 - 3, Math.random() * 6 - 3);
  this.rad = 20;
  this.ctx1 = ctx1;
  this.ctx2 = ctx2;
  this.clr = clr;
 
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
  if(this.loc.x > world.dims.left){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.x < world.dims.right){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y > world.dims.top){
    this.vel.y = -this.vel.y;
  }
  if(this.loc.y < world.dims.bottom){
    this.vel.y = -this.vel.y;
  }
}


Mover.prototype.render = function () {
   //  render balls in world
  this.ctx1.beginPath();
  this.ctx1.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI); //circle
  this.ctx2.closePath();
  this.ctx1.strokeStyle = this.clr;
  this.ctx1.fillStyle = this.clr;
  this.ctx1.fill();
  this.ctx1.stroke();
   //  render balls in mini map
   this.ctx2.beginPath();
   this.ctx2.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI); //circle
   this.ctx2.closePath();
   this.ctx2.strokeStyle = this.clr;
   this.ctx2.fillStyle = this.clr;
   this.ctx2.fill();
   this.ctx2.stroke();
}
