function Bg3() {
    this.loc = new JSVector(0, 0);
    this.vel = new JSVector(6, 0);
}

Bg3.prototype.run = function () {
    this.render();
    this.update();
    this.checkEdges();
}

Bg3.prototype.render = function () {
    ctx.beginPath();
    ctx.rect(this.loc.x, this.loc.y + 700, 100, -200)
    ctx.rect(this.loc.x, this.loc.y + 700, 50, -250)
    ctx.rect(this.loc.x + 300, this.loc.y + 700, 100, -400)
    ctx.rect(this.loc.x + 400, this.loc.y + 700, 150, -350)
    ctx.rect(this.loc.x + 650, this.loc.y + 700, 100, -200)
    ctx.rect(this.loc.x, this.loc.y + 700, 100, -200)
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(this.loc.x + 5, this.loc.y + 530, 10, -15)
    ctx.rect(this.loc.x + 25, this.loc.y + 530, 10, -15)
    ctx.rect(this.loc.x + 5, this.loc.y + 570, 10, -15)
    ctx.rect(this.loc.x + 25, this.loc.y + 570, 10, -15)
    ctx.rect(this.loc.x + 5, this.loc.y + 610, 10, -15)
    ctx.rect(this.loc.x + 25, this.loc.y + 610, 10, -15)
    ctx.rect(this.loc.x + 55, this.loc.y + 530, 10, -15)
    ctx.rect(this.loc.x + 75, this.loc.y + 530, 10, -15)
    ctx.rect(this.loc.x + 55, this.loc.y + 570, 10, -15)
    ctx.rect(this.loc.x + 75, this.loc.y + 570, 10, -15)
    ctx.rect(this.loc.x + 55, this.loc.y + 610, 10, -15)
    ctx.rect(this.loc.x + 75, this.loc.y + 610, 10, -15)
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

Bg3.prototype.update = function () {
    this.loc.add(this.vel);
}

Bg3.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) {
        this.loc.x = -this.loc.x;
    }
}