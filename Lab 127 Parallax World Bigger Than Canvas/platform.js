function Platforms(ctx){
    this.loc = new JSVector(0,0);
    this.vel = new JSVector(0,0);
    this.ctx = ctx;
}

Platforms.prototype.run = function(loc){
    this.render(loc);
}

Platforms.prototype.render = function(loc){
    this.ctx.beginPath();
    for(let i = 0;i<75;i++){
        this.ctx.rect((i*300)+loc.x*.20,330+loc.y*.25,80,20);
    }
    this.ctx.strokeStyle = "white"
    this.ctx.fillStyle = "#5F3400"
    this.ctx.lineWidth = 5;
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();

}