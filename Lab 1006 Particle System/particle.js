function particle(ploc, ctx1, ctx2, clr) {
    this.loc = new JSVector(ploc.x, ploc.y);
    this.vel = new JSVector(Math.random()*8-4,Math.random()*8-4);
    this.acc = new JSVector(0, .05);
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    this.clr = clr;
    this.death = Math.random() * 255 + 255;
    this.isDead = false;
    this.rad = 50;
}

particle.prototype.run = function () {
    this.update();
    this.life();
    this.render();
    
}

particle.prototype.update = function () {
    this.loc.add(this.vel)
    this.vel.add(this.acc);
}

particle.prototype.life = function () {
    this.death = - 1;
    if (this.death <= 0) {
        this.isDead = true;
    }
}

particle.prototype.render = function () {
    this.ctx1.beginPath();
    this.ctx1.arc(this.loc.x,this.loc.y,this.rad,0,Math.PI*2);
    this.ctx1.strokeStyle = this.clr;
    this.ctx1.fillStyle = this.clr;
    this.ctx1.fill();
    this.ctx1.stroke()
    this.ctx1.closePath();
    

    this.ctx2.beginPath();
    this.ctx2.arc(this.loc.x,this.loc.y,this.rad,0,Math.PI*2);
    this.ctx2.strokeStyle = this.clr;
    this.ctx2.fillStyle = this.clr;
    this.ctx2.fill();
    this.ctx2.stroke()
    this.ctx2.closePath();
    
}