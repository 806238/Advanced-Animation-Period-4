function Orbiter(x,y,a){
    this.loc = JSVector(x ,y);
    this.orbRad = 30;
    this.rad = 15;
    this.angVel = .5;
    this.angle = a; 
}

Orbiter.prototype.render = function(){
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI);
    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.fill();
    context.stroke();
    context.closePath();
}

Orbiter.prototype.update = function () {
    this.loc.add(this.vel);
}


