function Orbiter(x,y,d){
    this.loc = JSVector(x ,y);
    this.vel = 3;
    this.angVel = 3;
    this.angle = 90;
    this.diam = d;
    
}

Orbiter.prototype.run = function(){
    this.render();
    this.update();
}

Orbiter.prototype.render = function(){
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);
    context.strokeStyle = this.color;
    context.fillStyle = this.color;
    context.fill();
    context.stroke();
    context.closePath();
}

Orbiter.prototype.update = function () {
    
}


