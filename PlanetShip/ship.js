function Ship(x,y,d){
    this.loc = new JSVector(x, y);
    let dx = Math.random()*4-2
    let dy = Math.random()*4-2
    this.vel = new JSVector(dx, dy);
    this.acc = new JSVector(0, .05);
    this.diam = d;
    this.color = "red";
}

Ship.prototype.run = function(){
    this.render();
    this.update();
    this.bounce();
}

Ship.prototype.render = function(){
    let radius = this.diam/2
    context.save();
    context.beginPath();    // clear old path
    context.translate(100,100);
    context.rotate(90);
    context.moveTo(this.loc.x, this.loc.y);
    context.lineTo(this.loc.x+25, this.loc.y);
    context.lineTo(this.loc.x-25, this.loc.y+25);
    context.lineTo(this.loc.x-10, this.loc.y);
    context.lineTo(this.loc.x-25, this.loc.y-25);
    context.lineTo(this.loc.x+25, this.loc.y);
    context.strokeStyle = this.color;  // color to fill
    context.fillStyle = this.color;     // color to stroke
    context.fill();     // render the fill
    context.stroke()
    context.closePath();
    context.restore();
}

Ship.prototype.update = function () {
    this.loc.add(this.vel);
    this.vel.limit(1)
    //this.vel.add(this.acc);
    }

Ship.prototype.bounce = function () { 
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