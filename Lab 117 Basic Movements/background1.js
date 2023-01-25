function Bg1() {
    this.loc = new JSVector(0, 0);
    this.vel = new JSVector(1, 0);
}

Bg1.prototype.run = function () {
    this.render();
    this.update();
    this.checkEdges();
}

Bg1.prototype.render = function () {
    ctx.beginPath();
    ctx.moveTo(this.loc.x, this.loc.y + 700);
    ctx.lineTo(this.loc.x + 400, this.loc.y + 200);
    ctx.lineTo(this.loc.x + 800, this.loc.y + 700);
    ctx.fillStyle = "#252525";
    ctx.strokeStyle = "#252525";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

Bg1.prototype.update = function () {
    this.loc.add(this.vel);

}

Bg1.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) {
        this.loc.x = -this.loc.x;
    }
}