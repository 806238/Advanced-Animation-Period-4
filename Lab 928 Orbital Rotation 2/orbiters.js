function Orbiter(x, y, a) {
    this.parentLoc = new JSVector(x,y);
    this.parentToOrb = new JSVector(x,y);
    this.orbRad = 50;
    this.angle = a;
    this.parentToOrb.setMagnitude(this.orbRad);
    this.parentToOrb.setDirection(this.angle);
    this.orbLoc = JSVector.addGetNew(this.parentLoc, this.parentToOrb);
    this.colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    this.colorIndex = Math.floor(Math.random() * this.colorArray.length);
    this.color = this.colorArray[this.colorIndex];
}

Orbiter.prototype.run = function (x,y) {
    this.render();
    this.update(x,y);
}

Orbiter.prototype.render = function () {
    //orbiter
    context.save();
    context.beginPath();
    context.arc(this.orbLoc.x, this.orbLoc.y, 10, 0, 2 * Math.PI); //circle
    context.strokeStyle = this.color;
    context.fillStyle = this.color;
    context.fill();
    context.stroke();
    context.closePath();
    context.restore();

    //line
    context.beginPath();
    context.moveTo(this.orbLoc.x, this.orbLoc.y);
    context.lineTo(this.parentLoc.x, this.parentLoc.y);
    context.strokeStyle = this.color;
    context.lineWidth = 1;
    context.stroke();
    context.closePath();
}

Orbiter.prototype.update = function (x,y) {
    this.parentLoc.x = x;
    this.parentLoc.y = y;
    this.parentToOrb.setDirection(this.parentToOrb.getDirection()-.1);
    this.orbLoc.x = this.parentLoc.x + this.orbRad * Math.cos(this.parentToOrb.getDirection());
    this.orbLoc.y = this.parentLoc.y + this.orbRad * Math.sin(this.parentToOrb.getDirection());
}
