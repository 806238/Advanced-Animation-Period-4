function Resource() {
    this.loc = new JSVector(700,300);
    this.vel = new JSVector(0,.5);
    this.acc = new JSVector(0,0);
}

Resource.prototype.run = function () {
    this.update();
    this.render();
}

Resource.prototype.render = function () {
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, 20, 0, 2 * Math.PI);
    ctx.strokeStyle = "#FFAE00";
    ctx.fillStyle = "#FFAE00";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();    
}

Resource.prototype.update = function () {
    this.loc.add(this.vel)
    if(this.loc.y > 305)
    this.vel.setDirection(-Math.PI/2)
    if(this.loc.y < 295)
    this.vel.setDirection(Math.PI/2)
}