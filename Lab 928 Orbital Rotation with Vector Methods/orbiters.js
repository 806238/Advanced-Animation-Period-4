function Orbiter(planet, a) {
    this.planet = planet;
    this.orbRad = 50;
    this.angle = a;
    this.angVel = .07;
    this.rotator = new JSVector();
    this.rotator.setMagnitude(this.orbRad);
    this.rotator.setDirection(this.angle);
    this.colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    this.colorIndex = (Math.floor(Math.random() * this.colorArray.length));
    this.color = this.colorArray[this.colorIndex];
    
}

Orbiter.prototype.run = function () {
    this.update();
    this.render();
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
    context.lineTo(this.planet.loc.x, this.planet.loc.y);
    context.strokeStyle = this.color;
    context.lineWidth = 1;
    context.stroke();
    context.closePath();
}

Orbiter.prototype.update = function () {
    this.rotator.rotate(this.angVel);
    this.orbLoc = JSVector.addGetNew(this.planet.loc, this.rotator);
    
}
