function Hero(loc, ctx) {
    this.loc = JSVector.subGetNew(loc,new JSVector(-400,-300));
    this.ctx = ctx;
}

Hero.prototype.run = function () {
    //this.render();
}

Hero.prototype.render = function () {
    this.ctx.beginPath();
    this.ctx.arc(this.loc.x, this.loc.y, 10, 0, 2 * Math.PI); //circle
    this.ctx.closePath();
    this.ctx.strokeStyle = "white";
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.stroke();
}