function Mover(x,y,ctx1,ctx2,clr) {
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(Math.random() * 6 - 3, Math.random() * 6 - 3);
  this.rad = 70;
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
   this.ctx1.save();
   this.ctx1.translate(this.loc.x,this.loc.y);
   this.ctx1.rotate(this.vel.getDirection());
   this.ctx1.moveTo(this.rad, 0);
   this.ctx1.lineTo(0, this.rad/2);
   this.ctx1.lineTo(this.rad-50, 0);
   this.ctx1.lineTo(0, -this.rad/2);
   this.ctx1.strokeStyle = this.clr; 
   this.ctx1.fillStyle = this.clr;     
   this.ctx1.fill();     
   this.ctx1.stroke()
   this.ctx1.closePath();
   this.ctx1.restore();
   
   //  render balls in mini map
   this.ctx2.beginPath();   
   this.ctx2.save();
   this.ctx2.translate(this.loc.x,this.loc.y);
   this.ctx2.rotate(this.vel.getDirection());
   this.ctx2.moveTo(this.rad, 0);
   this.ctx2.lineTo(0, this.rad/2);
   this.ctx2.lineTo(this.rad-50, 0);
   this.ctx2.lineTo(0, -this.rad/2);
   this.ctx2.strokeStyle = this.clr; 
   this.ctx2.fillStyle = this.clr;     
   this.ctx2.fill();     
   this.ctx2.stroke()
   this.ctx2.closePath();
   this.ctx2.restore();
}
