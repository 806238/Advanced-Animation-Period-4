function Planet(x, y, d, n) {
    this.loc = new JSVector(x, y);
    let dx = Math.random() * 10 - 5;
    let dy = Math.random() * 10 - 5;
    this.vel = new JSVector(dx, dy);
    this.diam = d;
    this.colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    this.colorIndex = Math.floor(Math.random() * this.colorArray.length);
    this.color = this.colorArray[this.colorIndex];
    this.numOrbs = n;
    this.orbiters = [];
    for (let i = 0; i < this.numOrbs; i++) {
        this.orbiters.push(new Orbiter(this, i * (2 * Math.PI / this.numOrbs)));
    }
}

Planet.prototype.run = function () {
    for (let i = 0; i < this.orbiters.length; i++) {
        this.orbiters[i].run();
    }
    this.render();
    this.update();
    this.checkEdges();
}

Planet.prototype.render = function () {
    context.beginPath();
    context.moveTo(this.loc.x - 10, this.loc.y + 10);
    context.lineTo(this.loc.x + 10, this.loc.y + 10);
    context.lineTo(this.loc.x + 10, this.loc.y - 10);
    context.lineTo(this.loc.x - 10, this.loc.y - 10);
    context.strokeStyle = this.color;
    context.fillStyle = this.color;
    context.fill();
    context.stroke();
    context.closePath();
}

Planet.prototype.update = function () {
    this.loc.add(this.vel);
    this.vel.limit(1);

}


Planet.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) this.loc.x = 0
    if (this.loc.x < 0) this.loc.x = canvas.width
    if (this.loc.y > canvas.height) this.loc.y = 0
    if (this.loc.y < 0) this.loc.y = canvas.height
}



