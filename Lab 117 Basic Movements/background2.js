function Bg2() {
    this.loc = new JSVector(0, 0);
    this.vel = new JSVector(3, 0);
}

Bg2.prototype.run = function () {
    this.render();
    this.update();
    this.checkEdges();
}

Bg2.prototype.render = function () {
    ctx.beginPath();
    ctx.moveTo(this.loc.x, this.loc.y + 700);
    ctx.lineTo(this.loc.x + 200, this.loc.y + 400);
    ctx.lineTo(this.loc.x + 400, this.loc.y + 700);
    ctx.lineTo(this.loc.x + 600, this.loc.y + 400);
    ctx.lineTo(this.loc.x + 800, this.loc.y + 700);
    ctx.fillStyle = "#303030";
    ctx.strokeStyle = "#303030";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

Bg2.prototype.update = function () {
    this.loc.add(this.vel);

}

Bg2.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) {
        this.loc.x = -this.loc.x;
    }
}