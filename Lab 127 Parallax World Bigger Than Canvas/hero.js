function Hero(ctx) {
    this.ctx = ctx;
    
}

Hero.prototype.run = function (loc) {
    this.render(loc);
}

Hero.prototype.render = function (loc) {
    this.ctx.beginPath();
    this.ctx.arc(loc.x+400, loc.y+300, 10, 0, 2 * Math.PI); //circle
    this.ctx.closePath();
    this.ctx.strokeStyle = "white";
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.stroke();
}